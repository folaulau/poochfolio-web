import { useState, useEffect, useRef } from 'react';
import React from 'react';

import SmallFooter from '../components/SmallFooter';

import { useNavigate } from 'react-router-dom';
import GroomerApi from '../api/GroomerApi';
import GroomerGraphql from '../graphql/GroomerGraphQL';
import Button from '../components/Button';
import styled from 'styled-components';

import {
  Museosansrounded700NormalGraniteGra,
  Museosansrounded300NormalGraniteGra,
  Museosansrounded900NormalGraniteGra,
  Museosansrounded700NormalMetallicSe,
  Museosansrounded700NormalWhite15px,
  Border1pxSkyBlue,
} from '../styledMixins';
import './Availability1.css';
import Dropdown from 'react-dropdown';

const Availability1 = () => {
  let navigate = useNavigate();
  const options = [
    { value: '01:00:00', label: '1:00 AM' },
    { value: '02:00:00', label: '2:00 AM' },
    { value: '03:00:00', label: '3:00 AM' },
    { value: '04:00:00', label: '4:00 AM' },
    { value: '05:00:00', label: '5:00 AM' },
    { value: '06:00:00', label: '6:00 AM' },
    { value: '07:00:00', label: '7:00 AM' },
    { value: '08:00:00', label: '8:00 AM' },
    { value: '09:00:00', label: '9:00 AM' },
    { value: '10:00:00', label: '10:00 AM' },
    { value: '11:00:00', label: '11:00 AM' },
    { value: '12:00:00', label: '12:00 AM' },
  ];
  const nightOptions = [
    { value: '13:00:00', label: '1:00 PM' },
    { value: '14:00:00', label: '2:00 PM' },
    { value: '15:00:00', label: '3:00 PM' },
    { value: '16:00:00', label: '4:00 PM' },
    { value: '17:00:00', label: '5:00 PM' },
    { value: '18:00:00', label: '6:00 PM' },
    { value: '19:00:00', label: '7:00 PM' },
    { value: '20:00:00', label: '8:00 PM' },
    { value: '21:00:00', label: '9:00 PM' },
    { value: '22:00:00', label: '10:00 PM' },
    { value: '23:00:00', label: '11:00 PM' },
  ];

  const days = [
    {
      name: 'Sunday',
    },
    {
      name: 'Monday',
    },
    {
      name: 'Tuesday',
    },
    {
      name: 'Wednesday',
    },
    {
      name: 'Thursday',
    },
    {
      name: 'Friday',
    },
    {
      name: 'Saturday',
    },
  ];
  const [careServices, setCareServices] = useState([
    {
      name: 'Monday',
      uuid: '',
      selected: false,
      operateMonday: false,
    },
    {
      name: 'Tuesday',
      uuid: '',
      selected: false,
      operateTuesday: false,
    },
    {
      name: 'Wednesday',
      uuid: '',
      selected: false,
      operateWednesday: false,
    },
    {
      name: 'Thursday',
      uuid: '',
      selected: false,
      operateThursday: false,
    },
    {
      name: 'Friday',
      uuid: '',
      selected: false,
      operateFriday: false,
    },
    {
      name: 'Saturday',
      uuid: '',
      selected: false,
      operateSaturday: false,
    },
    {
      name: 'Sunday',
      uuid: '',
      selected: false,
      operateSunday: false,
    },
  ]);
  const [selectedClosingHour, setSelectedClosingHour] = useState(nightOptions[0].label);
  const [selectedOpeningHour, setSelectedOpeningHour] = useState(options[0].label);
  const [openingHour, setOpeningHour] = useState(null);
  const [closingHour, setClosingHour] = useState(null);
  const [operateMondayHours, setOperateMondayHours] = useState(false);
const [operateTuesdayHours, setOperateTuesdayHours] = useState(false);
const [operateWednesdayHours, setOperateWednesdayHours] = useState(false);
const [operateThursdayHours, setOperateThursdayHours] = useState(false);
const [operateFridayHours, setOperateFridayHours] = useState(false);
const [operateSaturdayHours, setOperateSaturdayHours] = useState(false);
const [operateSundayHours, setOperateSundayHours] = useState(false);
  const [groomerInfo, setGroomerInfo] = useState({
    uuid: localStorage.getItem('uuid'),
    firstName: '',
    lastName: '',
    businessName: '',
    phoneNumber: '',
    signUpStatus: 'ADD_SERVICES',
  });

  const [address, setAddress] = useState({
    uuid: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    longitude: 0,
    latitude: 0,
  });

  console.log('this is night options', selectedClosingHour)

  const [addressAsLine, setAddressAsLine] = useState('');
  const addressUuidInput = useRef(null);
  const eShape2371 = require('../assessts/images/checkMark.png');
  useEffect(() => {
    loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const availabilityData = {

    signUp: 'Sign Up',
    createProfile: 'Create Profile',
    inputListing: 'Input Listing',
    availability: 'Availability',

    setYourAvailability: 'Set Your Availability',
    letTheCustomerKno: 'Let the customer know when you’re available to do services',
    availablesDays: 'Availables Days',

    sundays: 'Sundays',
    mondays: 'Mondays',
    tuesdays: 'Tuesdays',
    wednesdays: 'Wednesdays',
    thursdays: 'Thursdays',
    fridays: 'Fridays',
    saturdays: 'Saturdays',
 
    youCanCustomizeYourHoursLater: 'You can customize your hours later',
   
  };

  const loadProfile = () => {
    GroomerGraphql.getOnlyProfile()
      .then((response) => {
        console.log('Profile:', response);
        let groomer = response.data.data?.groomer[0];

        let groomerData = {
          uuid: groomer?.uuid || '',
          firstName: groomer?.firstName || '',
          lastName: groomer?.lastName || '',
          businessName: groomer?.businessName || '',
          phoneNumber: groomer?.phoneNumber || '',
        };

        setGroomerInfo(groomerData);

        let groomerCareServices = groomer?.careServices || [];

        if (groomerCareServices.length > 0) {
          /**
           * By default careServices are all selected.
           * Now select only the careServices that have been selected before
           */
          let selctedCareServices = careServices.map((careService) => {
            let groomerCareService = groomerCareServices.find(
              (groomerCareService) => careService.name === groomerCareService.name,
            );
            if (groomerCareService === undefined) {
              careService['selected'] = false;
              return careService;
            } else {
              careService['uuid'] = groomerCareService?.uuid || '';
              careService['selected'] = true;
              return careService;
            }
          });

          setCareServices(selctedCareServices);
        }

        let mainAddress = groomer?.addresses?.[0];

        setAddress(mainAddress);

        addressUuidInput.current = mainAddress?.uuid || '';

        if (
          mainAddress !== undefined &&
          mainAddress.uuid !== undefined &&
          mainAddress.uuid !== ''
        ) {
          setAddressAsLine(
            mainAddress.street +
              ', ' +
              mainAddress.city +
              ', ' +
              mainAddress.state +
              ' ' +
              mainAddress.zipcode,
          );
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  const toggleCareService = (careService) => {
    let selectedCareServices = careServices.map((cs) => {
      if (careService.name === cs.name) {
        cs.selected = !cs.selected;
      }
      if (careService.name === cs.name && careService.name === 'Monday') {
        setOperateMondayHours(true);
      }
       if (careService.name === cs.name && careService.name === 'Tuesday') {
         setOperateTuesdayHours(true);
       }
        if (careService.name === cs.name && careService.name === 'Wednesday') {
          setOperateWednesdayHours(true);
        }
         if (careService.name === cs.name && careService.name === 'Thursday') {
           setOperateThursdayHours(true);
         }
          if (careService.name === cs.name && careService.name === 'Friday') {
            setOperateFridayHours(true);
          }
           if (careService.name === cs.name && careService.name === 'Saturday') {
             setOperateSaturdayHours(true);
           }
            if (careService.name === cs.name && careService.name === 'Sunday') {
              setOperateSundayHours(true);
            }

      return cs;
    });

    setCareServices(selectedCareServices);
  };

  const onSelectOpeningHour = (option) => {
    console.log('You selected ', option);
    setSelectedOpeningHour(option.label);
    setOpeningHour(option.value);
  };

  const onSelectClosingHour = (option) => {
    console.log('You selected ', option.value);
    setSelectedClosingHour(option.label);
    setClosingHour(option.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const putBody = {
      ...groomerInfo,
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

    GroomerApi.createAvailability(putBody)
      .then((response) => {
        console.log('Success:', response);
        if(response.status  === 200) {
         navigate('/dashboard');
        }
        else {
          return
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };



  return (
    <>
   
      <div style={{ height: 5, backgroundColor: 'white' }} />
    <div className="container-center-horizontal">
      <div className="availability screen">
        <OverlapGroup4>
          <ColorFill2></ColorFill2>
          <SmallFooter />

          <Content>
            <Title>Set Your Availability</Title>
            <LetTheCustomerKno>
              Let the customer know when you’re available to do services
            </LetTheCustomerKno>
            <Group15Copy>
              <AvailableHours>Available Hours</AvailableHours>
              <OverlapGroup3>
                <OverlapGroup></OverlapGroup>

                <X0900am>
                  <Dropdown
                    options={options}
                    onChange={onSelectOpeningHour}
                    value={selectedOpeningHour}
                    placeholder="Select an option"
                  />
                </X0900am>
                <X0500pm>
                  <Dropdown
                    className="rounded-full"
                    options={nightOptions}
                    onChange={onSelectClosingHour}
                    value={selectedClosingHour}
                    placeholder="Select an option"
                  />
                </X0500pm>
                <To>to</To>
              </OverlapGroup3>
            </Group15Copy>
            <AvailableDaysCopy>
              <AvailablesDays>{availabilityData.availablesDays}</AvailablesDays>
              <OverlapGroup2>
                <div className="my-4 md:flex md:flex-row">
                  {days.map((service) => {
                    let careService = careServices.find(
                      (careService) => careService.name === service.name,
                    );

                    const isSelected = careService.selected;

                    return (
                      <button
                        type="button"
                        key={service.name}
                        style={{
                          boxShadow: 'inset 0px 0px 10px #81d6e6',
                          width: '138px',
                          height: '105px',
                          marginRight: '31.06px',
                        }}
                        className={`w-40 h-[66.94px] rounded-xl border ${
                          isSelected ? 'bg-[#95e8f7]' : 'bg-[#f1f7ff]'
                        }  flex justify-center items-center gap-x-3 m-1`}
                        onClick={() => toggleCareService(careService)}
                      >
                        {/* <service.icon
                          className={`${isSelected ? 'text-[#077997]' : 'text-[#9697a3]'} h-8 w-8`}
                        /> */}
                        <span className={`${isSelected ? 'text-[#077997]' : 'text-[#9697a3]'} `}>
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </OverlapGroup2>
            </AvailableDaysCopy>
            <YouCanCustomizeYourHoursLater>
              You can customize your hours later
            </YouCanCustomizeYourHoursLater>
            <Button />
          </Content>
          <ButtonCopy5 onClick={handleSubmit}>
            <CONTINUE>CONTINUE</CONTINUE>
          </ButtonCopy5>
          <YouCanCustomizeYourHoursLater>
            You can customize your hours later
          </YouCanCustomizeYourHoursLater>
        </OverlapGroup4>
      </div>
    </div>
    </>
  );
};

const AvailableHours = styled.div`
  ${Museosansrounded900NormalGraniteGra}
  margin-top: -35px;
  min-height: 24px;
  margin-left: 4.93px;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  ${Museosansrounded700NormalGraniteGra}
  width: 1014px;
  height: 107px;
  position: relative;
  margin-top: 14px;
  margin-left: -22.5px;
`;

const X0900am = styled.div`
  position: absolute;
  top: 1px;
  left: 23px;
  letter-spacing: 0;
  line-height: 41.4px;
  white-space: nowrap;
  border-color: blue;
  width: 459.5px;
  height: 61.67px;
`;

const OverlapGroup2 = styled.div`
  width: 966px;
  height: 165px;
  position: relative;
  margin-top: 26px;
`;

const YouCanCustomizeYourHoursLater = styled.p`
  ${Museosansrounded300NormalGraniteGra}
  min-height: 20px;
  margin-top: 80px;
  margin-left: 4.71px;
  min-width: 238px;
  max-width:238px
  text-align: center;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;
const X0500pm = styled.div`
  position: absolute;
  top: 1px;
  left: 518px;
  letter-spacing: 0;
  line-height: 41.4px;
  white-space: nowrap;
  width: 459.5px;
  height: 61.67px;
`;

const To = styled.div`
  position: absolute;
  top: 25px;
  left: 495px;
  letter-spacing: 0;
  // line-height: 91.4px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 107px;
  top: 0;
  left: 0;
  display: flex;
  padding: 12.5px 22.5px;
  align-items: flex-start;
  min-width: 1014px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup4 = styled.div`
  width: 9855px;
  height: 6800px;
  position: relative;
  margin-left: -3049px;
  margin-top: -16px;
`;
const ColorFill2 = styled.div`
  position: absolute;
  width: 9855px;
  height: 6784px;
  top: 16px;
  left: 0;
  background-color: #f3f8ff;
`;

const AvailableDaysCopy = styled.div`
  width: 965px;
  margin-top: 29px;
  margin-left: 3.18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 156px;
`;

const AvailablesDays = styled.div`
  ${Museosansrounded900NormalGraniteGra}
  margin-top: -35px;
  min-height: 24px;
  margin-left: 1.36px;
  letter-spacing: 0;
  // line-height: 91.4px;
  white-space: nowrap;
`;

const Group15Copy = styled.div`
  width: 969px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 98px;
`;

const LetTheCustomerKno = styled.p`
  ${Museosansrounded700NormalGraniteGra}
  min-height: 20px;
  margin-top: 12px;
  margin-left: 36.71px;
  min-width: 414px;
  text-align: center;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

const Content = styled.div`
  position: absolute;
  width: 969px;
  top: 82px;
  left: 3286px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 575px;
`;

const Title = styled.h1`
  ${Museosansrounded700NormalMetallicSe}
  margin-top: -34px;
  margin-bottom: -67px;
  min-height: 33px;
  margin-right: 25.04px;
  min-width: 237px;
  letter-spacing: 0;
  line-height: 100px;
  white-space: nowrap;
`;

const ButtonCopy5 = styled.div`
  ${Border1pxSkyBlue}
  position: absolute;
  height: 56px;
  top: 657px;
  left: 3495px;
  display: flex;
  padding: 0 231.8px;
  align-items: flex-start;
  min-width: 545px;
  background-color: var(--metallic-seaweed);
  border-radius: 28.24px;
  box-shadow: -9.184850467946473e-16px 15px 20px #00a3ce26;
`;

const CONTINUE = styled.div`
  ${Museosansrounded700NormalWhite15px}
  min-height: 20px;
  margin-top: -22.76px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 100px;
  white-space: nowrap;
`;

export default Availability1;
