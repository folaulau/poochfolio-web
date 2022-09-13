import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroomerApi from '../api/GroomerApi';
import styled from 'styled-components';


import {
  Museosansrounded700NormalGraniteGra,
  Museosansrounded300NormalGraniteGra,
  Museosansrounded900NormalGraniteGra,
  Museosansrounded700NormalMetallicSe,
  Museosansrounded700NormalWhite15px,
  Border1pxSkyBlue,
  Museosansrounded500NormalGraniteGra,
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
      name: 'Sundays',
    },
    {
      name: 'Mondays',
    },
    {
      name: 'Tuesdays',
    },
    {
      name: 'Wednesdays',
    },
    {
      name: 'Thursdays',
    },
    {
      name: 'Fridays',
    },
    {
      name: 'Saturdays',
    },
  ];
  const [careServices, setCareServices] = useState([
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
  const [selectedClosingHour, setSelectedClosingHour] = useState(nightOptions[4].label);
  const [selectedOpeningHour, setSelectedOpeningHour] = useState(options[8].label);
  const [openingHour, setOpeningHour] = useState(null);
  const [closingHour, setClosingHour] = useState(null);
  const [operateMondayHours, setOperateMondayHours] = useState(false);
  const [operateTuesdayHours, setOperateTuesdayHours] = useState(false);
  const [operateWednesdayHours, setOperateWednesdayHours] = useState(false);
  const [operateThursdayHours, setOperateThursdayHours] = useState(false);
  const [operateFridayHours, setOperateFridayHours] = useState(false);
  const [operateSaturdayHours, setOperateSaturdayHours] = useState(false);
  const [operateSundayHours, setOperateSundayHours] = useState(false);
  const [groomerInfo] = useState({
    uuid: localStorage.getItem('uuid'),
    firstName: '',
    lastName: '',
    businessName: '',
    phoneNumber: '',
    signUpStatus: 'ADD_SERVICES',
  });

  console.log('this is night options', selectedClosingHour)

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
    youCanCustomizeYourHoursLater: 'You can customize your hours later'
  };

  const toggleCareService = (careService) => {
    let selectedCareServices = careServices.map((cs) => {
      if (careService.name === cs.name) {
        cs.selected = !cs.selected;
      }
      if (careService.name === cs.name && careService.name === 'Mondays') {
        setOperateMondayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Tuesdays') {
        setOperateTuesdayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Wednesdays') {
        setOperateWednesdayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Thursdays') {
        setOperateThursdayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Fridays') {
        setOperateFridayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Saturdays') {
        setOperateSaturdayHours(true);
      }
      if (careService.name === cs.name && careService.name === 'Sundays') {
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
        if (response.status === 200) {
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
      <div className="container-center-horizontal custom-animation">
        <div className="availability screen">
          <OverlapGroup4>
            <ColorFill2></ColorFill2>
            {/* <SmallFooter /> */}

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
                        (care) => care.name === service.name,
                      );

                      const isSelected = careService.selected;

                      return (
                        <button
                          type="button"
                          key={service.name}
                          style={{
                            boxShadow: 'inset 0px 0px 10px #81d6e6',
                            width: '130px',
                            height: '105px',
                            marginRight: '14px',
                            flexDirection: 'column',
                          }}
                          className={`w-40 h-[66.94px] rounded-xl border ${isSelected ? 'bg-[#95e8f7]' : 'bg-[#f1f7ff]'
                            }  flex justify-center items-center gap-x-2 m-1`}
                          onClick={() => toggleCareService(careService)}
                        >
                          {isSelected ? (
                            <img
                              src="/landing-page/bluecheck1.svg"
                              alt=""
                              style={{ height: 38, width: 38 }}
                            />
                          ) : (
                            <img
                              src="/landing-page/bluecircle.svg"
                              alt=""
                              style={{ height: 38, width: 38 }}
                            />
                          )}
                          <span className={`font-Museo-Sans-Rounded-300 ${isSelected ? 'text-[#077997]' : 'text-[#9697a3]'}`} style={{ fontSize: 15, marginTop: 20 }}>

                            {service.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </OverlapGroup2>
              </AvailableDaysCopy>
            </Content>
            <ButtonCopy5 onClick={handleSubmit}>
              <CONTINUE>CONTINUE</CONTINUE>
            </ButtonCopy5>
          </OverlapGroup4>
        </div>
      </div>
      <Powered>
        <PoochTechnologiesInc>Pooch Technologies Inc</PoochTechnologiesInc>
        <PrivacyPolicyTermsOfUse>
          Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp; Terms of Use
        </PrivacyPolicyTermsOfUse>
      </Powered>
    </>
  );
};

const Powered = styled.div`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 100%;
  height: 42px;
  top: 1129px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--lily-white);
`;

const PoochTechnologiesInc = styled.div`
  // margin-bottom: -30.5px;
  width: 122px;
  height: 25px;
  margin-left: 175px;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

const PrivacyPolicyTermsOfUse = styled.p`
  // margin-bottom: -30.5px;
  width: 153px;
  height: 25px;
  margin-right: 177.5px;
  text-align: right;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

const AvailableHours = styled.div`
  ${Museosansrounded900NormalGraniteGra}
  margin-top: -35px;
  min-height: 24px;
  margin-left: 4.93px;
  letter-spacing: 0;
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
  white-space: nowrap;
`;

const Group15Copy = styled.div`
  width: 969px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 98px;
  margin-top: 40px;
`;

const LetTheCustomerKno = styled.p`
  ${Museosansrounded700NormalGraniteGra}
  min-height: 20px;
  margin-top: 12px;
  min-width: 414px;
  text-align: center;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
  font-size: 15px;
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
  font-size: 26px;
`;

const ButtonCopy5 = styled.div`
  ${Border1pxSkyBlue}
  position: absolute;
  height: 56px;
  top: 560px;
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
