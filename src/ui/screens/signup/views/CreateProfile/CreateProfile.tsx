import React, { useEffect, useRef, useState } from 'react';
import * as styled from './CreateProfile.styled';
import LocationSvg from "../../../../../assets/images/landing/location.svg";
import { services } from "./CreateProfile.config";
import { COLOR } from '../../../../../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../@core/Spinner';
import { toast } from 'react-toastify';
import { maskPhoneNumber } from '../../../../../utils/phoneMask';
import { validatePhone } from '../../../../../utils/phoneValidate';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../../../../api/constant';
import { createProfile } from '../../../../api/server/auth';

type Props = {
};

export const CreateProfile: React.FC<Props> = ({
}) => {
    const addressUuidInput = useRef(null);
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.auth.loading);
    const user = useSelector((state: any) => state.auth.user);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [addressFormat, setAddressFormat] = useState({
        uuid: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        longitude: 0,
        latitude: 0,
    });

    const ACTIVE_COLOR = COLOR.primary0;
    const INACTIVE_COLOR = COLOR.gray5;

    const [careServices, setCareServices] = useState([
        {
            name: "Grooming",
            uuid: "",
            selected: false,
        },
        {
            name: "Dog Daycare",
            uuid: "",
            selected: false,
        },
        {
            name: "Dog Boarding",
            uuid: "",
            selected: false,
        }
    ]);

    const onChooseService = (service: any) => {
        let selectedCareServices = careServices.map((cs) => {
            if (service.name === cs.name) {
                cs.selected = !cs.selected;
            }

            return cs;
        });

        setCareServices(selectedCareServices);
    }

    const onCreate = () => {
        if (loading) return

        if (!firstName || !lastName || !businessName || !phoneNumber || !address) {
            toast('Please fill all fields', { type: 'error' });
            return
        }

        if (!validatePhone(phoneNumber)) {
            toast('Phone number is not valid!', { type: 'error' });
            return
        }

        if (careServices.filter((careService) => careService.selected).length === 0) {
            toast('Please choose your services!', { type: 'error' });
            return
        }

        var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        const groomerInfo = {
            uuid: user.uuid,
            firstName: firstName,
            lastName: lastName,
            businessName: businessName,
            address: addressFormat,
            phoneNumber: phoneNumber.replace(phoneRegex, '$1$2$3'),
            signUpStatus: "ADD_SERVICES",
            careServices: careServices.filter((careService) => careService.selected)
        }

        createProfile(dispatch, groomerInfo)
            .then((res) => {})
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Form>
                <styled.Row>
                    <styled.InputWrapper>
                        <styled.Label>First Name</styled.Label>
                        <styled.Input
                            placeholder='First Name'
                            type={'text'}
                            value={firstName}
                            onChange={(e) => {
                                if (loading) return
                                setFirstName(e.target.value)
                            }}
                        />
                    </styled.InputWrapper>
                    <styled.InputWrapper>
                        <styled.Label>Last Name</styled.Label>
                        <styled.Input
                            placeholder='Last Name'
                            type={'text'}
                            value={lastName}
                            onChange={(e) => {
                                if (loading) return
                                setLastName(e.target.value)
                            }}
                        />
                    </styled.InputWrapper>
                </styled.Row>
                <styled.Row>
                    <styled.InputWrapper>
                        <styled.Label>Business Name</styled.Label>
                        <styled.Input
                            placeholder='Business Name'
                            type={'text'}
                            value={businessName}
                            onChange={(e) => {
                                if (loading) return
                                setBusinessName(e.target.value)
                            }}
                        />
                    </styled.InputWrapper>
                    <styled.InputWrapper>
                        <styled.Label>Phone Number</styled.Label>
                        <styled.Input
                            placeholder='123-456-7890'
                            type={'text'}
                            value={phoneNumber}
                            onChange={(e) => {
                                if (loading) return
                                setPhoneNumber(maskPhoneNumber(e.target.value))
                            }}
                        />
                    </styled.InputWrapper>
                </styled.Row>
                <styled.AddressWrapper>
                    <styled.Label>Address</styled.Label>
                    <styled.AddressInput
                        id="name"
                        placeholder='Type street or location name'
                        defaultValue={address}
                        ref={addressUuidInput}
                        apiKey={GOOGLE_API_KEY}
                        onPlaceSelected={(place, inputRef, autocomplete) => {
                            setAddress(place.formatted_address);
                            const formattedAddress = place.formatted_address;
                            let newAddress = {
                                uuid: place.place_id,
                                street: formattedAddress.split(",")[0],
                                city: formattedAddress.split(",")[1].trim(),
                                state: formattedAddress.split(",")[2].trim().split(" ")[0],
                                zipcode: formattedAddress.split(",")[2].trim().split(" ")[1] || "90001",
                                country: formattedAddress.split(",")[3].trim(),
                                latitude: place.geometry.location.lat(),
                                longitude: place.geometry.location.lng(),
                            };
                            setAddressFormat(newAddress);
                        }}
                        options={{
                            types: ['address'],
                        }}
                    />
                    <styled.Location>
                        <img src={LocationSvg} alt="location" />
                    </styled.Location>
                </styled.AddressWrapper>
                <styled.ServiceContainer>
                    <styled.Label style={{ fontSize: 15 }}>Which services does your business offer</styled.Label>
                    <styled.List>
                        {services.map((item: any, index) => {
                            let careService: any = careServices.find(
                                (careService) => careService.name === item.name,
                            );

                            const isSelected = careService.selected;

                            return (
                                <styled.Service key={index} active={isSelected} onClick={() => onChooseService(careService)}>
                                    <item.icon color={isSelected ? ACTIVE_COLOR : INACTIVE_COLOR} />
                                    <label style={{ color: isSelected ? ACTIVE_COLOR : INACTIVE_COLOR }}>{item.name}</label>
                                </styled.Service>
                            )
                        })}
                    </styled.List>
                </styled.ServiceContainer>

                <styled.LoginButton onClick={onCreate}>CONTINUE</styled.LoginButton>
            </styled.Form>
        </styled.Container>
    )
}