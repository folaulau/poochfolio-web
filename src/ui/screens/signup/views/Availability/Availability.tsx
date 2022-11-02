import React, { useState } from 'react';
import * as styled from './Availability.styled';
import { FaCheck } from 'react-icons/fa';
import { COLOR } from '../../../../../assets/colors';
import { DAYS, endOptions, startOptions } from './Availability.config';
import { useDispatch, useSelector } from 'react-redux';
import { createAvailability } from '../../../../api/server/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../../@core/Spinner';

type Props = {
};

export const Availability: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state: any) => state.auth.loading);
    const user = useSelector((state: any) => state.auth.user);


    const [days, setDays] = useState([
        {
            name: 'Mondays',
            uuid: '',
            selected: true,
            operateMonday: true,
        },
        {
            name: 'Tuesdays',
            uuid: '',
            selected: true,
            operateTuesday: true,
        },
        {
            name: 'Wednesdays',
            uuid: '',
            selected: true,
            operateWednesday: true,
        },
        {
            name: 'Thursdays',
            uuid: '',
            selected: true,
            operateThursday: true,
        },
        {
            name: 'Fridays',
            uuid: '',
            selected: true,
            operateFriday: true,
        },
        {
            name: 'Saturdays',
            uuid: '',
            selected: false,
            operateSaturday: false,
        },
        {
            name: 'Sundays',
            uuid: '',
            selected: false,
            operateSunday: false,
        },
    ]);

    const [operateMondayHours, setOperateMondayHours] = useState(true);
    const [operateTuesdayHours, setOperateTuesdayHours] = useState(true);
    const [operateWednesdayHours, setOperateWednesdayHours] = useState(true);
    const [operateThursdayHours, setOperateThursdayHours] = useState(true);
    const [operateFridayHours, setOperateFridayHours] = useState(true);
    const [operateSaturdayHours, setOperateSaturdayHours] = useState(false);
    const [operateSundayHours, setOperateSundayHours] = useState(false);

    const [selectedOpeningHour, setSelectedOpeningHour] = useState(startOptions[8].label);
    const [selectedClosingHour, setSelectedClosingHour] = useState(endOptions[4].label);
    const [openingHour, setOpeningHour] = useState(startOptions[8].value);
    const [closingHour, setClosingHour] = useState(endOptions[4].value);

    const onSelectOpeningHour = (option: any) => {
        setSelectedOpeningHour(option.label);
        setOpeningHour(option.value);
    };

    const onSelectClosingHour = (option: any) => {
        setSelectedClosingHour(option.label);
        setClosingHour(option.value);
    };

    const toogleDays = (day: any) => {
        let selecteDays = days.map((cs) => {
            if (day.name === cs.name) {
                cs.selected = !cs.selected;
            }
            if (day.name === cs.name && day.name === 'Mondays') {
                setOperateMondayHours(true);
            }
            if (day.name === cs.name && day.name === 'Tuesdays') {
                setOperateTuesdayHours(true);
            }
            if (day.name === cs.name && day.name === 'Wednesdays') {
                setOperateWednesdayHours(true);
            }
            if (day.name === cs.name && day.name === 'Thursdays') {
                setOperateThursdayHours(true);
            }
            if (day.name === cs.name && day.name === 'Fridays') {
                setOperateFridayHours(true);
            }
            if (day.name === cs.name && day.name === 'Saturdays') {
                setOperateSaturdayHours(true);
            }
            if (day.name === cs.name && day.name === 'Sundays') {
                setOperateSundayHours(true);
            }

            return cs;
        });

        setDays(selecteDays);
    };

    const update = () => {
        if(loading) return
        const data = {
            uuid: user.uuid,
            operateMonday: operateMondayHours,
            operateTuesday: operateTuesdayHours,
            operateWednesday: operateWednesdayHours,
            operateThursday: operateThursdayHours,
            operateFriday: operateFridayHours,
            operateSaturday: operateSaturdayHours,
            operateSunday: operateSundayHours,
            openTime: openingHour,
            closeTime: closingHour,
        };

        createAvailability(dispatch, data)
            .then((res) => {
                navigate('/reservations')
            })
            .catch((err) => {
                toast(err, { type: 'error' })
            })

    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Form>
                <styled.Title>Set Your Availability</styled.Title>
                <styled.Description>Let the customer know when you're available to do services</styled.Description>
                <styled.Wrapper>
                    <styled.Lable>Available Hours</styled.Lable>
                    <styled.DropList>
                        <styled.Drop
                            options={startOptions}
                            onChange={onSelectOpeningHour}
                            value={selectedOpeningHour}
                            placeholder="Select an option"
                            arrowClassName='arrow'
                        />
                        <label>to</label>
                        <styled.Drop
                            options={endOptions}
                            onChange={onSelectClosingHour}
                            value={selectedClosingHour}
                            placeholder="Select an option"
                        />
                    </styled.DropList>
                </styled.Wrapper>
                <styled.Wrapper>
                    <styled.Lable>Available Days</styled.Lable>
                    <styled.List>
                        {DAYS.map((day, index) => {
                            let tempDay: any = days.find(
                                (d) => d.name === day.name,
                            );

                            const isSelected = tempDay.selected;

                            return (
                                <styled.Day active={isSelected} key={index} onClick={() => toogleDays(tempDay)}>
                                    <div>
                                        <FaCheck size={24} color={COLOR.primary0} />
                                    </div>
                                    <label>{day.name}</label>
                                </styled.Day>
                            )
                        })}

                    </styled.List>
                </styled.Wrapper>
                <styled.LoginButton onClick={update}>CONTINUE</styled.LoginButton>
                <styled.Description style={{ marginTop: 30, fontFamily: 'MuseoSansRouned300' }}>You can customize your hours later</styled.Description>
            </styled.Form>
        </styled.Container>
    )
}