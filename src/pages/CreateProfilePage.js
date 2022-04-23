import { useState } from "react";
import Input from "../components/common/Input";
import Autocomplete from "react-google-autocomplete";
import { services } from "../data/services";

const CreateProfilePage = () => {
  const [servicesSelected, setServicesSelected] = useState({
    grooming: false,
    dayCare: false,
    overNight: false,
    pickDrop: false,
  });

  const [groomerInfo, setGroomerInfo] = useState({
    uuid: localStorage.getItem("uuid"),
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    addresses: [],
    signUpStatus: "CREATE_PROFILE",
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

  const handleServiceSelect = (serviceInfo) => {
    setServicesSelected({
      ...servicesSelected,
      [serviceInfo.service]: !servicesSelected[serviceInfo.service],
    });
  };

  const handleSubmit = (e) => {
    const putBody = {
      ...groomerInfo,
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
        window.location.replace("http://localhost:3000/input-listing");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    setGroomerInfo({
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phoneNumber: "",
      addresses: [],
    });
  };

  const handleChange = (e) => {
    setGroomerInfo({
      ...groomerInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-16">
      <section className="grid justify-center my-12 md:grid-cols-2 md:max-w-3xl mx-auto">
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
          labelText="Email"
          placeholderText="johndoe@xyz.com"
          type="email"
          name="email"
          handleChange={handleChange}
          value={groomerInfo.email}
          required={true}
        />
        <Input
          labelText="Phone Number"
          placeholderText="123-45-6789"
          type="phone"
          name="phoneNumber"
          handleChange={handleChange}
          value={groomerInfo.phoneNumber}
          required={true}
        />
        {/* <Input
            placeholderText="123 sesame street"
            labelText="Address"
            type="name"
            // required={true}
          /> */}
        <div className="mb-5">
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
              className="shadow-sm block w-full p-3 rounded-full w-80 text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff]"
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
            {/* <input
                type="name"
                name="name"
                id="name"
                
                className="shadow-sm block w-full p-3 rounded-full w-80 text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff]"
                placeholder={placeholderText}
                style={{ border: "1px solid #85d8e7" }}
              /> */}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h4>Which Services does your business offer</h4>
        <div className="my-8 md:flex md:flex-row">
          {services.map((service) => (
            <button
              type="button"
              key={service.name}
              style={{ border: "1px solid rgb(133,216,231" }}
              className={`w-40 h-[68px] rounded-xl ${
                servicesSelected[service.service]
                  ? "bg-[#95e8f7]"
                  : "bg-[#f1f7ff]"
              }  flex justify-center items-center gap-x-3 m-1`}
              onClick={() => handleServiceSelect(service)}
            >
              <service.icon
                className={`${
                  servicesSelected[service.service]
                    ? "text-[#077997]"
                    : "text-[#9697a3]"
                } h-8 w-8`}
              />
              <span
                className={`${
                  servicesSelected[service.service]
                    ? "text-[#077997]"
                    : "text-[#9697a3]"
                } `}
              >
                {service.name}
              </span>
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
        >
          Continue
        </button>
      </section>
    </form>
  );
};

export default CreateProfilePage;
