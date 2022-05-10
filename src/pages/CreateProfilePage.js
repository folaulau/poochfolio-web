import { useState, useEffect } from "react";
import Input from "../components/common/Input";
import Autocomplete from "react-google-autocomplete";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";
import GroomerApi from "../api/GroomerApi";
import GroomerGraphql from "../graphql/GroomerGraphQL";

const CreateProfilePage = () => {
  let navigate = useNavigate();
  const [careServices, setCareServices] = useState([
    {
      name: "Grooming",
      labelName: "grooming",
    },
    {
      name: "Dog Daycare",
      labelName: "dayCare",
    },
    {
      name: "Overnight",
      labelName: "overNight",
    },
    {
      name: "Pick Up",
      labelName: "pickDrop",
    },
  ]);

  const [groomerInfo, setGroomerInfo] = useState({
    uuid: localStorage.getItem("uuid"),
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    addresses: [],
    signUpStatus: "ADD_SERVICES",
  });

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    loadProfile();
    loadServiceTypes();
  },[]);

  const loadProfile = () =>{
    GroomerGraphql.getProfile()
    .then((response) => {
      console.log("Success:", response);
      let groomerInfo = response.data.data?.groomer[0];
      console.log("groomerInfo:", groomerInfo);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  }

  const loadServiceTypes = () =>{
    GroomerApi.getServiceTypes()
    .then((response) => {
      console.log("Success:", response);
      let serviceTypes = response.data;
      console.log("serviceTypes:", serviceTypes);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  }

  const handleServiceSelect = (selectedItem) => {
    console.log("selectedItem", selectedItem);
    const localCareServices = [...careServices];
    const selectedIndex = localCareServices.findIndex(
      (item) => item.labelName === selectedItem.labelName
    );

    if (selectedIndex > -1) {
      //remove service from array
      localCareServices.splice(selectedIndex, 1);
      setCareServices(localCareServices);
    } else {
      //add service to array
      localCareServices.push(selectedItem);
      setCareServices(localCareServices);
    }
  };

  const handleSubmit = (e) => {
    const putBody = {
      ...groomerInfo,
      careServices: careServices.map((item) => ({
        name: item.name,
      })),
      addresses: [{ ...address }],
    };
    e.preventDefault();
    fetch("https://dev-api.poochapp.net/v1/groomers/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("poochToken"),
      },
      body: JSON.stringify(putBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.replace("http://localhost:3000/input-listing");
        setTimeout(() => {
          navigate("/sign-up/input-listing2");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    setGroomerInfo({
      firstName: "",
      lastName: "",
      businessName: "",
      phoneNumber: "",
      addresses: [],
    });

    setCareServices([
      {
        name: "Grooming",
        labelName: "grooming",
      },
      {
        name: "Daycare",
        labelName: "dayCare",
      },
      {
        name: "Overnight",
        labelName: "overNight",
      },
      // {
      //   name: "Pick/Drop",
      //   labelName: "pickDrop",
      // },
    ]);
  };

  const handleChange = (e) => {
    setGroomerInfo({
      ...groomerInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-16 bg-[#f3f8ff]">
      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center my-12 sm:gap-x-8 md:max-w-3xl mx-auto w-1/2">
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
          placeholderText="123-45-6789"
          type="tel"
          name="phoneNumber"
          handleChange={handleChange}
          value={groomerInfo.phoneNumber}
          required={true}
        />
        <div className="mb-5 sm:col-span-2">
          <label
            htmlFor="name"
            className="text-[15px] text-[#666666] ml-2 font-Museo-Sans-Rounded-700"
          >
            Address
          </label>
          <div className="mt-3.5">
            <Autocomplete
              type="address"
              name="name"
              id="name"
              className="shadow-sm block w-full p-3 rounded-full text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff]"
              apiKey="AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk"
              onPlaceSelected={(place) => {
                const formattedAddress = place.formatted_address;
                setAddress({
                  street: formattedAddress.split(",")[0],
                  city: formattedAddress.split(",")[1].trim(),
                  state: formattedAddress.split(",")[2].trim().split(" ")[0],
                  zipcode: formattedAddress.split(",")[2].trim().split(" ")[1],
                  country: formattedAddress.split(",")[3].trim(),
                  latitude: place.geometry.location.lat(),
                  longitude: place.geometry.location.lng(),
                });
              }}
              style={{ border: "1px solid #85d8e7" }}
              options={{
                types: ["address"],
              }}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-1/2 mx-auto">
        <h4>Which Services does your business offer</h4>
        <div className="my-8 md:flex md:flex-row">
          {services.map((service) => {
            const isSelected = careServices
              .map((items) => items.labelName === service.labelName)
              .includes(true);
            return (
              <button
                type="button"
                key={service.labelName}
                style={{ boxShadow: "inset 0px 0px 15px #81d6e6" }}
                className={`w-40 h-[68px] rounded-xl border ${
                  isSelected ? "bg-[#95e8f7]" : "bg-[#f1f7ff]"
                }  flex justify-center items-center gap-x-3 m-1`}
                onClick={() => handleServiceSelect(service)}
              >
                <service.icon
                  className={`${
                    isSelected ? "text-[#077997]" : "text-[#9697a3]"
                  } h-8 w-8`}
                />
                <span
                  className={`${
                    isSelected ? "text-[#077997]" : "text-[#9697a3]"
                  } `}
                >
                  {service.name}
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="submit"
          className="w-1/2 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
        >
          Continue
        </button>
      </section>
    </form>
  );
};

export default CreateProfilePage;
