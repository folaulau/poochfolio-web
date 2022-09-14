import { useState, useEffect, useRef } from "react";
import Input from "../components/common/Input";
import Autocomplete from "react-google-autocomplete";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";
import GroomerApi from "../api/GroomerApi";
import GroomerGraphql from "../graphql/GroomerGraphQL";
import styled from 'styled-components';
import { Museosansrounded500NormalGraniteGra } from '../styledMixins';
import LocationSvg from "../assets/images/landing/location.svg";

const CreateProfilePage = () => {
  let navigate = useNavigate();

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
      name: "Overnight",
      uuid: "",
      selected: false,
    },
    // {
    //   name: "Pick up/Drop off",
    //   uuid: "",
    //   selected: true,
    // },
  ]);

  const [phoneNumber, setPhoneNumber] = useState(null)
  const formatPhoneNumberForUpload = (number) => {
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneRegex.test(number)) {
      const secondCheckPhoneNumber = number?.replace(phoneRegex, '$1$2$3');
      return secondCheckPhoneNumber;
    } else {
      return false
      // alert('Please enter a valid phone number');
    }
  };
  console.log(formatPhoneNumberForUpload(phoneNumber))
  const [groomerInfo, setGroomerInfo] = useState({
    uuid: localStorage.getItem("uuid"),
    firstName: "",
    lastName: "",
    businessName: "",
    signUpStatus: "ADD_SERVICES",
  });

  const [address, setAddress] = useState({
    uuid: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    longitude: 0,
    latitude: 0,
  });

  const [addressAsLine, setAddressAsLine] = useState("");
  const addressUuidInput = useRef(null);

  useEffect(() => {
    loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(careServices.filter((item) => item.selected === true).length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [careServices])

  const loadProfile = () => {
    GroomerGraphql.getOnlyProfile()
      .then((response) => {
        console.log("Success:", response);
        let groomer = response.data.data?.groomer[0];

        let groomerData = {
          uuid: groomer?.uuid || "",
          firstName: groomer?.firstName || "",
          lastName: groomer?.lastName || "",
          businessName: groomer?.businessName || "",
          phoneNumber: groomer?.phoneNumber || "",
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
              (groomerCareService) =>
                careService.name === groomerCareService.name
            );
            if (groomerCareService === undefined) {
              careService["selected"] = false;
              return careService;
            } else {
              careService["uuid"] = groomerCareService?.uuid || "";
              careService["selected"] = true;
              return careService;
            }
          });

          setCareServices(selctedCareServices);
        }

        let mainAddress = groomer?.addresses?.[0];

        setAddress(mainAddress);

        addressUuidInput.current = mainAddress?.uuid || "";

        if (
          mainAddress !== undefined &&
          mainAddress.uuid !== undefined &&
          mainAddress.uuid !== ""
        ) {
          setAddressAsLine(
            mainAddress.street +
            ", " +
            mainAddress.city +
            ", " +
            mainAddress.state +
            " " +
            mainAddress.zipcode
          );
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const toggleCareService = (careService) => {
    let selectedCareServices = careServices.map((cs) => {
      if (careService.name === cs.name) {
        cs.selected = !cs.selected;
      }

      return cs;
    });

    setCareServices(selectedCareServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const putBody = {
      ...groomerInfo,
      careServices: careServices.filter((careService) => {
        return careService.selected;
      }),
      address: address,
      phoneNumber: formatPhoneNumberForUpload(phoneNumber),
    };
    console.log("body : ", putBody)
    GroomerApi.createUpdateProfile(putBody)
      .then((response) => {
        console.log("Success:", response);
        navigate("/sign-up/input-listing2");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const updateAddress = (place) => {
    const formattedAddress = place.formatted_address;

    let newAddress = {
      uuid: addressUuidInput?.current || "",
      street: formattedAddress.split(",")[0],
      city: formattedAddress.split(",")[1].trim(),
      state: formattedAddress.split(",")[2].trim().split(" ")[0],
      zipcode: formattedAddress.split(",")[2].trim().split(" ")[1],
      country: formattedAddress.split(",")[3].trim(),
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    };

    setAddress(newAddress);
  };

  const handleChange = (e) => {
    setGroomerInfo({
      ...groomerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhone = e => {
    setPhoneNumber(e.target.value)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="pt-4 bg-[#f3f8ff] custom-animation"
        style={{
          borderWidth: 5,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderTopColor: '#FFFFFF',
        }}
      >
        <section
          className="grid grid-cols-1 sm:grid-cols-2 justify-center my-12 sm:gap-x-8 md:max-w-3xl mx-auto w-1/2"
          style={{ marginBottom: '41.97px' }}
        >
          <Input
            labelText="First Name"
            placeholderText="John"
            type="name"
            name="firstName"
            handleChange={handleChange}
            value={groomerInfo.firstName}
            required={true}
          />
          <Input
            labelText="Last Name"
            placeholderText="Doe"
            type="name"
            name="lastName"
            handleChange={handleChange}
            value={groomerInfo.lastName}
            required={true}
          />
          <Input
            labelText="Business Name"
            placeholderText="John Corporations"
            type="name"
            name="businessName"
            handleChange={handleChange}
            value={groomerInfo.businessName}
            required={true}
          />
          <Input
            labelText="Phone Number"
            placeholderText="123-456-7890"
            type="tel"
            name="phoneNumber"
            handleChange={handlePhone}
            value={phoneNumber}
            required={true}
          />
          <div className="mb-5 sm:col-span-2">
            <label
              htmlFor="name"
              className="text-[12px] text-[#666666] ml-2 font-Museo-Sans-Rounded-500"
            >
              Address
            </label>
            <div className="mt-3.5" style={{ position: 'relative' }}>
              <Autocomplete
                type="address"
                name="name"
                id="name"
                defaultValue={addressAsLine}
                ref={addressUuidInput}
                required={true}
                className="shadow-sm block w-full p-3 rounded-full text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff]"
                apiKey="AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk"
                onPlaceSelected={(place, inputRef, autocomplete) => updateAddress(place)}
                style={{
                  border: '2px solid #85d8e7',
                  color: 'black',
                  height: '58.3px',
                }}
                options={{
                  types: ['address'],
                }}
              />
              <div style={{ position: 'absolute', top: 17.5, right: 10, cursor: 'pointer' }}>
                <img src={LocationSvg} alt="location-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-1/2 mx-auto">
          <h4>Which Services does your business offer</h4>
          <div className="my-4 md:flex md:flex-row">
            {services.map((service) => {
              let careService = careServices.find(
                (careService) => careService.name === service.name,
              );

              const isSelected = careService.selected;

              return (
                <button
                  type="button"
                  key={service.name}
                  style={{
                    boxShadow: 'inset 0px 0px 15px #81d6e6',
                    width: '158.94px',
                    marginRight: '31.06px',
                  }}
                  className={`w-40 h-[66.94px] rounded-xl border ${isSelected ? 'bg-[#95e8f7]' : 'bg-[#f1f7ff]'
                    }  flex justify-center items-center gap-x-3 m-1`}
                  onClick={() => toggleCareService(careService)}
                >
                  <service.icon
                    className={`${isSelected ? 'text-[#077997]' : 'text-[#9697a3]'} h-8 w-8`}
                  />
                  <span className={`${isSelected ? 'text-[#077997]' : 'text-[#9697a3]'} `}>
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="submit"
            className="w-1/2 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
            style={{ marginTop: '34.16px', width: '544.62px', height: '56.48px' }}
          >
            Continue
          </button>
        </section>
      </form>
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
  bottom: -300px;
  // left: 3038px;
  top: 948px;
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
export default CreateProfilePage;
