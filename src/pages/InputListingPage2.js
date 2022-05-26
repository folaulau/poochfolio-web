import { useCallback, useEffect, useState } from "react";
import {
  ClipboardCheckIcon,
  PlusCircleIcon,
  PhotographIcon,
} from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import { useDropzone } from "react-dropzone";
import GroomerGraphql from "../graphql/GroomerGraphQL";
import GroomerApi from "../api/GroomerApi";
import Modal from "../components/input-listing/modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const InputListingPage2 = () => {
  
  const [open, setOpen] = useState(false);
  // const [myData, setMyData] = useState([]);
  const [careServices, setCareServices] = useState([]);
  const [images, setImages] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [instantBooking, setInstantBooking] = useState(false);
  const [services, setServices] = useState({
    chargePerMile: 0,
    numberOfOcupancy: 50,
  });
  const [pickDrop, setPickDrop] = useState({
    offeredPickUp: false,
    offeredDropOff: false,
  });
  const [description, setDescription] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  // const poochToken = localStorage.getItem("poochToken");
  const poochUuid = localStorage.getItem("uuid");
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const onImageDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
    images.forEach((img) => {

    });
    // eslint-disable-next-line
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onImageDrop,
  });

  const onContractDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setContracts((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
    contracts.forEach((img) => {

    });
    // eslint-disable-next-line
  }, []);

  const {
    acceptedFiles: af,
    getRootProps: grp,
    getInputProps: gip,
  } = useDropzone({
    onContractDrop,
  });

  useEffect(() => {
    loadProfile();
    loadServiceTypes();
  }, []);

  const loadProfile = () => {
    GroomerGraphql.getProfile()
      .then((response) => {
        console.log("Success:", response);
        let groomerInfo = response.data.data?.groomer[0];
        console.log("groomerInfo:", groomerInfo);

        setCareServices(groomerInfo.careServices);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const loadServiceTypes = () => {
    GroomerApi.getServiceTypes()
      .then((response) => {
        console.log("Success:", response);
        let serviceTypes = response.data;
        setServiceTypes(serviceTypes);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const files = acceptedFiles.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });
  const contractFiles = af.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  const handleChange = (e) => {
    setServices({
      ...services,
      [e.target.name]: +e.target.value,
    });
  };

  const handlePickDrop = (e) => {
    setPickDrop({
      ...pickDrop,
      [e.target.name]: e.target.value === "true",
    });
  };

  const pickUpServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];
  const dropOffServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];

  const handleImage = () => {
    let formdata = new FormData();
    formdata.append("images", acceptedFiles[0], acceptedFiles[0].path);

    fetch(
      `https://dev-api.poochapp.net/v1/groomers/${poochUuid}/profile/images`,
      {
        method: "POST",
        headers: {
          token: localStorage.getItem("poochToken"),
        },
        body: formdata,
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleContract = () => {
    let formdata = new FormData();
    formdata.append("docs", af[0], af[0].path);
    fetch(
      `https://dev-api.poochapp.net/v1/groomers/${poochUuid}/contract/documents`,
      {
        method: "POST",
        headers: {
          token: localStorage.getItem("poochToken"),
        },
        body: formdata,
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleServicePrice = (e, id) => {
    const updatedPrices = careServices.map((item) => ({
      ...item,
      [e.target.name]: id === item.id ? +e.target.value : +item[e.target.name],
    }));
    setCareServices(updatedPrices);
  };

  const handleServiceTypes = (e) => {
    const selectedValue = e.target.value;
    const localCareServices = [...careServices];
    if (careServices.some((el) => el.name === selectedValue)) {
    } else {
      localCareServices.push({
        name: selectedValue,
      });
      setCareServices(localCareServices);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const putBody = {
      uuid: localStorage.getItem("uuid"),
      instantBooking: instantBooking,
      ...services,
      ...pickDrop,
      description: description,
    };

    console.log("putBody", putBody);
    GroomerApi.createUpdateListings(putBody)
    .then((response) => {})
    .then((error) => {})
  };

  console.log("serviceTypes", serviceTypes);
  return (
    <form
      className="flex flex-col items-center text-[15px] font-Museo-Sans-Rounded-500 bg-[#f3f8ff]"
      onSubmit={handleSubmit}
    >
      <div className="w-1/2 mt-12">
        <div className="py-2 min-w-full">
          <div className="overflow-x-scroll ring-1 ring-gray-300 rounded-xl">
            <table className="min-w-full bg-white">
              <thead
                className="border-b"
                style={{ boxShadow: "0px 1px 10px #c9d9ef" }}
              >
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Services Offered
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Small 1-20 lbs
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Medium 20-40 lbs
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Large 40+ lbs
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ...
                  </th>
                </tr>
              </thead>
              <tbody>
                {careServices.map((service) => (
                  <tr className="border-b" key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {service.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        name="small_price"
                        className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                        onChange={(e) => handleServicePrice(e, service.id)}
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        name="medium_price"
                        className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                        onChange={(e) => handleServicePrice(e, service.id)}
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        name="large_price"
                        className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                        onChange={(e) => handleServicePrice(e, service.id)}
                      />
                    </td>
                  </tr>
                ))}
                <tr className="text-center">
                  <td colSpan="5" className="py-4">
                    <button
                      className="flex mx-auto items-center gap-x-1"
                      onClick={() => setOpen(true)}
                    >
                      <PlusCircleIcon className="h-7 w-7 text-[#077997]" />
                      <span>Add Services</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-6 bg-white ring-1 ring-1 ring-gray-300 rounded-xl">
        <div className="flex pt-8 px-7 justify-between">
          <h1 className="uppercase text-[#2a8ca6] font-bold">
            Instant Booking
          </h1>
          <Switch
            checked={instantBooking}
            onChange={setInstantBooking}
            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997]"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
            />
            <span
              aria-hidden="true"
              className={classNames(
                instantBooking ? "bg-[#077997]" : "bg-gray-200",
                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
              )}
            />
            <span
              aria-hidden="true"
              className={classNames(
                instantBooking ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
              )}
            />
          </Switch>
        </div>
        <div className="flex py-8 px-7 justify-between">
          <h1>Do You Offer Pick Up Services?</h1>
          <fieldset>
            <legend className="sr-only">Do You Offer Pick Up Services?</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              {pickUpServices.map((pickUpService) => (
                <div key={pickUpService.id} className="flex items-center">
                  <input
                    id={pickUpService.id}
                    name="offeredPickUp"
                    type="radio"
                    value={pickUpService.value === false ? false : true}
                    defaultChecked={pickUpService.value === false}
                    onChange={handlePickDrop}
                    className="focus:ring-[#077997] h-4 w-4 text-[#077997] border-gray-300"
                  />
                  <label
                    htmlFor={pickUpService.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {pickUpService.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="flex pb-8 px-7 justify-between">
          <h1>Do You Offer Drop Off Services?</h1>
          <fieldset>
            <legend className="sr-only">Do You Offer Drop Off Services?</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              {dropOffServices.map((dropOffService) => (
                <div key={dropOffService.id} className="flex items-center">
                  <input
                    id={dropOffService.id}
                    name="offeredDropOff"
                    type="radio"
                    value={dropOffService.value}
                    defaultChecked={dropOffService.value === false}
                    onChange={handlePickDrop}
                    className="focus:ring-[#077997] h-4 w-4 text-[#077997] border-gray-300"
                  />
                  <label
                    htmlFor={dropOffService.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {dropOffService.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="flex pb-8 px-7 justify-between">
          <h1>How Much Do You Charge Per Mile?</h1>
          <input
            type="number"
            className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold border border-[#81d6e6]"
            name="chargePerMile"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex py-8 justify-between">
          <h1>What is the Maximum Occupancy at Your Business?</h1>
          <h1 className="text-[#077977] font-bold">
            {services.numberOfOcupancy}
          </h1>
        </div>
        <input
          type="range"
          name="numberOfOcupancy"
          onChange={handleChange}
          className="w-full accent-[#077997]"
        />
        <div className="flex py-8 justify-between">
          <h1>1 Dog</h1>
          <h1>200 Dogs</h1>
        </div>
      </div>
      <div className="w-1/2 mt-6">
        <h1>Description</h1>
        <textarea
          className="w-full rounded-2xl border h-32 border-[#81d6e6] bg-inherit pt-6 pl-8"
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          value={description}
          style={{ boxShadow: "inset 0px 0px 10px #81d6e6" }}
          placeholder="Type description"
        ></textarea>
      </div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="w-1/2 mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40 flex flex-col justify-center items-center"
      >
        <input {...getInputProps()} />
        <PhotographIcon className="h-6 text-[#077997]" />
        <p className="text-[#077997]">Drag and Drop Images</p>
        <ul>{files}</ul>
      </div>
      <button
        onClick={handleImage}
        className="bg-red-300 border border-red-600"
      >
        Submit Image
      </button>
      <div
        {...grp({ className: "dropzone" })}
        className="w-1/2 mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40 flex flex-col justify-center items-center"
      >
        <ClipboardCheckIcon className="h-6 text-[#077997]" />
        <input {...gip()} />

        <p className="text-[#077997]">Drag and Drop</p>
        <p className="text-[#077997]">
          Contract you need your customers to sign
        </p>
        <ul>{contractFiles}</ul>
      </div>
      <button
        onClick={handleContract}
        className="bg-red-300 border border-red-600"
      >
        Submit Contracts
      </button>{" "}
      <div className="w-1/2 flex justify-center">
        <button
          type="submit"
          className="mt-8 justify-center uppercase w-3/4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
        >
          Post listing
        </button>{" "}
      </div>
      {open && (
        <Modal
          careServices={careServices}
          serviceTypes={serviceTypes}
          onServiceChange={handleServiceTypes}
          open={open}
          setOpen={setOpen}
        />
      )}
    </form>
  );
};

export default InputListingPage2;
