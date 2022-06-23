import { useCallback, useEffect, useState } from "react";
import {
  PlusCircleIcon,
  DotsHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import GroomerGraphql from "../graphql/GroomerGraphQL";
import GroomerApi from "../api/GroomerApi";
import Modal from "../components/input-listing/modal";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import Toggle from "../components/common/Toggle";


export default function MarketPlace() {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [groomerInfo, setGroomerInfo] = useState({
    numberOfOccupancy: 0,
    description: "",
    chargePerMile: 0,
  });
  const [careServices, setCareServices] = useState([]);
  const [images, setImages] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [instantBooking, setInstantBooking] = useState(false);
  const [pickDrop, setPickDrop] = useState({
    offeredPickUp: false,
    offeredDropOff: false,
  });
  const [serviceTypes, setServiceTypes] = useState([]);
  const [selectedImage, setSelectedImage] = useState('https://pooch-api-local.s3.us-west-2.amazonaws.com/public/profile_images/groomer/30/a9d942b0-90f5-4684-8052-3fef6e51082d_female-dog-groomer.jpeg');

  const pickUpServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];
  const dropOffServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];


  const onImageDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
    images.forEach((img) => {});
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
    contracts.forEach((img) => {});
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
        let groomer = response.data.data?.groomer[0];
        console.log("groomer:", groomer);

        if (
          groomer.numberOfOccupancy === null ||
          groomer.numberOfOccupancy === undefined
        ) {
          groomer.numberOfOccupancy = 0;
        }

        if (
          groomer.chargePerMile === null ||
          groomer.chargePerMile === undefined
        ) {
          groomer.chargePerMile = "";
        }

        if (groomer.description === null || groomer.description === undefined) {
          groomer.description = "";
        }

        setPickDrop({
          offeredDropOff: groomer.offeredDropOff,
          offeredPickUp: groomer.offeredPickUp,
        });

        setGroomerInfo(groomer);

        setInstantBooking(groomer.instantBooking);

        setCareServices(groomer.careServices);
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
        {file.path}
      </li>
    );
  });
  const contractFiles = af.map((file) => {
    return (
      <li key={file.path}>
        {file.path} 
      </li>
    );
  });
  // console.log('selectedImg', selectedImage)

  const uploadedImages = groomerInfo?.documents?.map((img, i) => {
    return (
      img.fileType === "PROFILE_IMAGE" && (
        <div className="w-full relative" onClick={() => setSelectedImage(img.url)}>
        <img className="mr-8 rounded-lg" style={{ height: 150, width: 150 }} key={img.uuid} src={img.url}  alt="uploaded" />
        <span className="border-2 rounded-full h-7 w-7 absolute top-1 right-9 bg-pooch-blue-3 text-pooch-blue-2 text-center font-Museo-Sans-Rounded-700">{i} </span>
        </div>
      )
    );
  });
  console.log("this is groomer info", groomerInfo);

  const handleGroomerInfoChange = (event) => {
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setGroomerInfo({
      ...groomerInfo,
      [name]: value,
    });
  };

  const handlePickDrop = (e) => {
    setPickDrop({
      ...pickDrop,
      [e.target.name]: e.target.value === "true",
    });
  };

  const uploadProfileImages = async () => {
    if (acceptedFiles.length <= 0) {
      return "no profile images to upload";
    }
    let formdata = new FormData();
    formdata.append("images", acceptedFiles[0], acceptedFiles[0].path);

    return GroomerApi.uploadProfileImages(
      localStorage.getItem("uuid"),
      formdata
    );
  };

  const uploadContracts = async () => {
    if (af.length <= 0) {
      return "no contracts to upload";
    }
    let formdata = new FormData();
    formdata.append("docs", af[0], af[0].path);
    return GroomerApi.uploadContracts(localStorage.getItem("uuid"), formdata);
  };

  const handleServicePrice = (e, serviceName) => {
    const updatedPrices = careServices.map((item) => ({
      ...item,
      [e.target.name]:
        serviceName === item.name ? e.target.value : item[e.target.name],
    }));
    setCareServices(updatedPrices);
  };

  const handleServiceTypes = (e) => {
    const selectedValue = e.target.value;
    console.log("selectedValue: " + selectedValue);
    const localCareServices = [...careServices];

    if (
      careServices.some((careService) => careService.name === selectedValue)
    ) {
    } else {
      localCareServices.push({
        name: selectedValue,
      });

      setCareServices(localCareServices);
    }
  };
  const postList = async (e) => {
    e.preventDefault();

    console.log("instantBooking, ", instantBooking);

    let payload = groomerInfo;
    payload.instantBooking = instantBooking;
    payload.careServices = careServices;
    payload.offeredDropOff = pickDrop.offeredDropOff;
    payload.offeredPickUp = pickDrop.offeredPickUp;

    console.log("payload", payload);
    GroomerApi.updateListings(payload)
      .then((response) => {
        console.log("response");
        console.log(response);

        uploadContracts()
          .then((response) => {
            console.log("upload contracts responded");
            console.log(response);

            uploadProfileImages()
              .then((response) => {
                console.log("upload profileImages responded");
                console.log(response.data.url);

                navigate("/dashboard");
              })
              .catch((error) => {
                console.log("upload profileImages error");

                console.log(error);
              });
          })
          .catch((error) => {
            console.log("upload contracts error");

            console.log(error);
          });
      })
      .catch((error) => {
        console.log("error");

        console.log(error);
      });
  };

  return (
    <>
      <DashboardHeader />
      <Sidebar />
        <p className="w-full left-96 ml-14  absolute mt-4 font-Museo-Sans-Rounded-700 text-pooch-blue-2">Listing Active</p>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse ml-20">
        {/**Preview section */}
        <section
          aria-labelledby="summary-heading"
          className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex"
        >
          <div className="flex justify-center items-center mt-5 flex-col ">
            <p className="font-Museo-Sans-Rounded-700 text-pooch-black-1">
              MarketPlace Profile Preview
            </p>
            <div style={{height: '34rem'}}  className="mt-9 border-2 border-black w-1/2 p-100 rounded-xl relative">
              <img className="rounded-t-lg h-48 w-full z-20 absolute  top-0"  src={selectedImage ?? ''} alt="profile"/>
                <div style={{height: '100%'}} className=" bg-pooch-blue-3 rounded-xl  mb-8  border-2 pt-8 relative ">
                </div>
            </div>
          </div>
        </section>

        {/**Main section */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
          <div className="min-w-max mx-auto mt-4">
            <form
              onSubmit={postList}
              className="flex flex-col items-center text-[15px] font-Museo-Sans-Rounded-500 bg-[#f3f8ff]"
            >
              <div className="w-1/2 mt-12">
                <div className=" min-w-full rounded-xl">
                  <div className="ring-1 ring-gray-300 rounded-xl">
                    <table
                      className="min-w-full bg-white rounded-xl border-pooch-blue-5"
                      style={{ boxShadow: "0px 1px 10px #c9d9ef" }}
                    >
                      <thead
                        className="border-b"
                        style={{ boxShadow: "0px 1px 10px #c9d9ef" }}
                      >
                        <tr className="rounded-xl">
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
                            className="text-sm rounded-tl-lg font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            <DotsHorizontalIcon className="h-6 text-[#077997]" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {careServices.map((service) => (
                          <tr className="" key={service.name}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {service.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                name="smallPrice"
                                required={true}
                                value={
                                  service.smallPrice != null
                                    ? service.smallPrice
                                    : ""
                                }
                                className="border-none w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                                onChange={(e) =>
                                  handleServicePrice(e, service.name)
                                }
                              />
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                name="mediumPrice"
                                required={true}
                                value={
                                  service.mediumPrice != null
                                    ? service.mediumPrice
                                    : ""
                                }
                                className="border-none w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                                onChange={(e) =>
                                  handleServicePrice(e, service.name)
                                }
                              />
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                name="largePrice"
                                required={true}
                                value={
                                  service.largePrice != null
                                    ? service.largePrice
                                    : ""
                                }
                                className="border-none w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                                onChange={(e) =>
                                  handleServicePrice(e, service.name)
                                }
                              />
                            </td>
                          </tr>
                        ))}
                        <tr className="text-center ">
                          <td
                            colSpan="5"
                            className="py-4 border-t border-pooch-blue-5"
                          >
                            <button
                              type="button"
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
              <div className="w-1/2 mt-12">
                <div className="min-w-full mt-6 bg-white ring-1 ring-gray-300 rounded-xl px-2 py-4 ">
                  <div className="flex pt-8 px-7 justify-between">
                    <h1 className="uppercase text-[#2a8ca6] font-bold">
                      Instant Booking
                    </h1>
                    <Toggle
                      toggle={instantBooking}
                      onChange={setInstantBooking}
                    />
                  </div>
                  <div className="flex py-8 px-7 justify-between">
                    <h1>Do You Offer Pick Up Services?</h1>
                    <fieldset>
                      <legend className="sr-only">
                        Do You Offer Pick Up Services?
                      </legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {pickUpServices.map((pickUpService) => (
                          <div
                            key={pickUpService.id}
                            className="flex items-center"
                          >
                            <input
                              name="offeredPickUp"
                              type="checkbox"
                              value={pickUpService.value}
                              checked={
                                pickDrop.offeredPickUp === pickUpService.value
                              }
                              onChange={handlePickDrop}
                              className="focus:ring-indigo-500 h-6 w-6 text-pooch-blue-2 border-pooch-blue-5 rounded"
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
                      <legend className="sr-only">
                        Do You Offer Drop Off Services?
                      </legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {dropOffServices.map((dropOffService) => (
                          <div
                            key={dropOffService.id}
                            className="flex items-center"
                          >
                            <input
                              name="offeredDropOff"
                              type="checkbox"
                              value={dropOffService.value}
                              checked={
                                pickDrop.offeredDropOff === dropOffService.value
                              }
                              onChange={handlePickDrop}
                              className="focus:ring-indigo-500 h-6 w-6 text-pooch-blue-2 border-pooch-blue-5 rounded"
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
                      value={groomerInfo.chargePerMile}
                      onChange={handleGroomerInfoChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 mt-12">
                <div className="w-full ">
                  <div className="flex py-8 justify-between">
                    <h1>What is the Maximum Occupancy at Your Business?</h1>
                    <h1 className="text-[#077977] font-bold">
                      {groomerInfo.numberOfOccupancy}
                    </h1>
                  </div>
                  <input
                    type="range"
                    name="numberOfOccupancy"
                    value={groomerInfo.numberOfOccupancy}
                    onChange={handleGroomerInfoChange}
                    className="w-full accent-[#077997]"
                  />
                  <div className="flex py-8 justify-between">
                    <h1>1 Dog</h1>
                    <h1>200 Dogs</h1>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mt-12">
                <div className="w-full">
                  <h1>Description</h1>
                  <textarea
                    className="w-full rounded-2xl border h-32 border-[#81d6e6] bg-inherit pt-6 pl-8"
                    onChange={handleGroomerInfoChange}
                    name="description"
                    value={groomerInfo.description}
                    style={{ boxShadow: "inset 0px 0px 10px #81d6e6" }}
                  ></textarea>
                </div>
              </div>

              <div className="w-1/2 mt-12 ">
                <div
                  className="w-full   border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-44 flex flex-row-reverse  justify-center items-center py-8"
                >
               <div  {...getRootProps({ className: "dropzone" })}> 
                  <input {...getInputProps()} />
                  <span className="justify-items-center flex-col items-center content-center place-content-center">
                  <PlusIcon className="h-20 text-[#077997] self-center ml-8" />
                  <ul>{files}</ul>
                  <p className="text-[#077997] ">Drag and Drop Images</p>
                  </span>
                  </div>
                  <div className="flex justify-around">{uploadedImages}</div>
                </div>
              </div>

              <div className="w-1/2 mt-12">
                <div
                  {...grp({ className: "dropzone" })}
                  className="w-full  border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40 flex flex-col justify-center items-center"
                >
                  <PlusIcon className="h-6 text-[#077997]" />
                  <input {...gip()} />

                  <p className="text-[#077997]">Drag and Drop</p>
                  <p className="text-[#077997]">
                    Contract you need your customers to sign
                  </p>
                  <ul>{contractFiles}</ul>
                </div>
              </div>

              <div className="w-1/2 mt-12">
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="mt-8 justify-center uppercase w-3/4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
                  >
                    Save Changes
                  </button>{" "}
                </div>
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
          </div>
        </section>
      </main>
    </>
  );
}
