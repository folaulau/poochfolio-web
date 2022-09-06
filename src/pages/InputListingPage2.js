import { useCallback, useEffect, useState } from "react";
import {
  ClipboardCheckIcon,
  PlusCircleIcon,
  PhotographIcon,
} from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import GroomerGraphql from "../graphql/GroomerGraphQL";
import GroomerApi from "../api/GroomerApi";
import Modal from "../components/input-listing/modal";

import "../components/common/thumbStyle.css";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { Museosansrounded500NormalGraniteGra } from '../styledMixins';
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const InputListingPage2 = () => {

  let navigate = useNavigate();
  
  const [open, setOpen] = useState(false);
  const [groomerInfo, setGroomerInfo] = useState({
    numberOfOccupancy: 0,
    description: '',
    chargePerMile: 0
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

  const pickUpServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];
  const dropOffServices = [
    { id: "yes", title: "YES", value: true },
    { id: "no", title: "NO", value: false },
  ];

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

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onImageDrop, });

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

  const { acceptedFiles: af, getRootProps: grp, getInputProps: gip, } = useDropzone({ onContractDrop, });

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

        if(groomer.numberOfOccupancy===null || groomer.numberOfOccupancy===undefined){
          groomer.numberOfOccupancy = 0
        }

        if(groomer.chargePerMile===null || groomer.chargePerMile===undefined){
          groomer.chargePerMile = ''
        }

        if(groomer.description===null || groomer.description===undefined){
          groomer.description = ''
        }

        setPickDrop({
          offeredDropOff: groomer.offeredDropOff,
          offeredPickUp: groomer.offeredPickUp})

        setGroomerInfo(groomer);

        setInstantBooking(groomer.instantBooking)

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

  const handleGroomerInfoChange = (event) => {

    const target = event.target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setGroomerInfo({
      ...groomerInfo,
      [name]: value,
    });
  };
const handleGroomerOccupancy = (value) => {
  console.log('THIS IS VALUE', value)
  setGroomerInfo({
    ...groomerInfo,
    numberOfOccupancy:value
  });
} 
 
  const handlePickDrop = (e) => {
    setPickDrop({
      ...pickDrop,
      [e.target.name]: e.target.value === "true",
    });
  };

  const uploadProfileImages = async () => {
    if(acceptedFiles.length<=0){
      return "no profile images to upload";
    }
    let formdata = new FormData();
    formdata.append("images", acceptedFiles[0], acceptedFiles[0].path);

    return GroomerApi.uploadProfileImages(localStorage.getItem("uuid"), formdata);
  };

  const uploadContracts = async () => {
    if(af.length<=0){
      return "no contracts to upload";
    }
    let formdata = new FormData();
    formdata.append("docs", af[0], af[0].path);
    return GroomerApi.uploadContracts(localStorage.getItem("uuid"), formdata);
  };

  const handleServicePrice = (e, serviceName, serviceSize) => {
    // const updatedPrices = careServices.map((item) => ({
    //   ...item,
    //   [e.target.name]: serviceName === item.name ? e.target.value : item[e.target.name],
    // }));
    const updatedPrices = careServices.map(item => {
      if(serviceName === item.name ){
        item[e.target.name] = e.target.value 
        item[serviceSize] = true
      }
      return item
    });
    setCareServices(updatedPrices);
  };

  const handleServiceTypes = (e) => {
    const selectedValue = e.target.value;
    console.log("selectedValue: "+selectedValue)
    const localCareServices = [...careServices];

    if (careServices.some((careService) => careService.name === selectedValue)) {
    } else {
      localCareServices.push({
        name: selectedValue,
      });
      // console.log("localCareServices: ")
      // console.log(localCareServices)
      setCareServices(localCareServices);
    }
  };
  const postList = async (e) => {
    e.preventDefault();

    console.log("instantBooking, ", instantBooking)

    let payload = groomerInfo;
    payload.instantBooking = instantBooking;
    payload.careServices = careServices;
    payload.offeredDropOff = pickDrop.offeredDropOff;
    payload.offeredPickUp = pickDrop.offeredPickUp;

    console.log("payload", payload);
    GroomerApi.createListings(payload)
    .then((response) => {
      console.log("response")
      console.log(response)

      uploadContracts().then((response)=>{
        console.log("upload contracts responded")
        console.log(response)

        uploadProfileImages().then((response)=>{
          console.log("upload profileImages responded")
          console.log(response)
          
          navigate('/sign-up/availability1');

        }).catch((error) => {
          console.log("upload profileImages error")
    
          console.log(error)
        })
      }).catch((error) => {
        console.log("upload contracts error")
  
        console.log(error)
      })
    
      
    })
    .catch((error) => {
      console.log("error")

      console.log(error)
    })
  };

  return (
    <>
      <div style={{ height: 5, backgroundColor: 'white' }} />

      <form
        onSubmit={postList}
        className="flex flex-col items-center text-[15px] font-Museo-Sans-Rounded-500 bg-[#f3f8ff]"
       
      >
        <div className=" mt-12">
          <div className="py-2 " style={{ width: '729.57px', height: '195.91px', marginBottom: 8 }}>
            <div
              className="overflow-x-scroll ring-1 ring-gray-300 rounded-xl"
              style={{ width: '729.57px', height: '195.91px', boxShadow: '0px 10px 15px #DFECFF' }}
            >
              <table className="min-w-full bg-white">
                <thead className="border-b" style={{ boxShadow: '0px 1px 10px #c9d9ef' }}>
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
                    <tr className="border-b" key={service.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {service.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          name="smallPrice"
                          required={true}
                          value={service.smallPrice != null ? service.smallPrice : ''}
                          className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                          onChange={(e) => handleServicePrice(e, service.name, 'serviceSmall')}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          name="mediumPrice"
                          required={true}
                          value={service.mediumPrice != null ? service.mediumPrice : ''}
                          className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                          onChange={(e) => handleServicePrice(e, service.name, 'serviceMedium')}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          name="largePrice"
                          required={true}
                          value={service.largePrice != null ? service.largePrice : ''}
                          className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                          onChange={(e) => handleServicePrice(e, service.name, 'serviceLarge')}
                        />
                      </td>
                    </tr>
                  ))}
                  <tr className="text-center">
                    <td colSpan="5" className="py-4">
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
        <div
          className="w-1/2 mt-6 bg-white ring-1 ring-1 ring-gray-300 rounded-xl"
          style={{ width: '729.57px', boxShadow: '0px 10px 15px #DFECFF' }}
        >
          <div className="flex pt-8 px-7 justify-between">
            <h1 className="uppercase text-[#2a8ca6] font-bold">Instant Booking</h1>
            <Switch
              checked={instantBooking}
              onChange={setInstantBooking}
              className={classNames(
                instantBooking ? 'bg-toggle-green' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-indigo-500',
              )}
              style={{ width: '77px', height: '35px' }}
            >
              {instantBooking ? (
                <span
                  className="text-center ml-1 text-sm text-pooch-blue-2"
                  style={{ alignSelf: 'center', paddingLeft: 4 }}
                >
                  ON
                </span>
              ) : (
                <span className="sr-only"></span>
              )}
              <span
                aria-hidden="true"
                className={classNames(
                  instantBooking ? 'translate-x-3' : 'translate-x-0',
                  'pointer-events-none inline-block h-8 w-8 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                )}
                style={{ background: '#e4e4e4', borderColor: 'black', borderWidth: 2 }}
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
                      name="offeredPickUp"
                      type="checkbox"
                      value={pickUpService.value}
                      checked={pickDrop.offeredPickUp === pickUpService.value}
                      onChange={handlePickDrop}
                      className="focus:ring-[#077997] h-4 w-4 text-[#077997] border-gray-300"
                      style={{ height: '26px', width: '28px' }}
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
                      name="offeredDropOff"
                      type="checkbox"
                      value={dropOffService.value}
                      checked={pickDrop.offeredDropOff === dropOffService.value}
                      onChange={handlePickDrop}
                      className="focus:ring-[#077997] h-4 w-4 text-[#077997] border-gray-300"
                      style={{ height: '26px', width: '28px' }}
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
              style={{ width: '130.65px', height: '35.81px' }}
            />
          </div>
        </div>
        <div style={{ width: '729.57px' }}>
          <div className="flex py-8 justify-between">
            <h1>What is the Maximum Occupancy at Your Business?</h1>
            <h1 className="text-[#077977] font-bold">{groomerInfo.numberOfOccupancy}</h1>
          </div>

          <Slider
            value={groomerInfo.numberOfOccupancy}
            onChange={handleGroomerOccupancy}
            trackStyle={{ backgroundColor: '#077997', height: 4 }}
            min={0}
            max={200}
            step={1}
            handleStyle={{
              boxShadow: '0px 15px 20px #00A3CE4D',
              border: '3px solid #85D8E7',
              height: '34px',
              width: '34px',
              borderRadius: '21px',
              // background: '#FFFFFF',
              cursor: 'pointer',
              color: '#FFFFFF',
              marginTop: '-16.5px',
              marginLeft: '10px',
            }}
          />
          <div className="flex py-8 justify-between">
            <h1>1 Dog</h1>
            <h1>200 Dogs</h1>
          </div>
        </div>
        <div className="mb-6 mt-6" style={{ width: '729.57px', height: '122.3px' }}>
          <h1>Description</h1>
          <textarea
            className="w-full rounded-2xl border, mt-2  border-[#81d6e6] bg-inherit pt-6 pl-8"
            onChange={handleGroomerInfoChange}
            name="description"
            value={groomerInfo.description}
            style={{
              boxShadow: 'inset 0px 0px 10px #81d6e6',
              width: '729.57px',
              height: '122.3px',
            }}
          ></textarea>
        </div>
        <div
          {...getRootProps({ className: 'dropzone' })}
          className=" mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40 flex flex-col justify-center items-center"
          style={{ width: '729.57px' }}
        >
          <input {...getInputProps()} />
          <PhotographIcon className="h-6 text-[#077997]" />
          <p className="text-[#077997]">Drag and Drop Images</p>
          <ul>{files}</ul>
        </div>

        <div
          {...grp({ className: 'dropzone' })}
          className=" mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40 flex flex-col justify-center items-center"
          style={{ width: '729.57px', height: '228.3px' }}
        >
          <ClipboardCheckIcon className="h-6 text-[#077997]" />
          <input {...gip()} />

          <p className="text-[#077997]">Drag and Drop</p>
          <p className="text-[#077997]">Contract you need your customers to sign</p>
          <ul>{contractFiles}</ul>
        </div>
        <div className=" flex justify-center" style={{ width: '729.57px' }}>
          <button
            type="submit"
            className="mt-8 justify-center uppercase w-3/4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
            style={{ width: '544.62px', boxShadow: '0px 15px 20px #00A3CE26' }}
          >
            Post listing
          </button>{' '}
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
  top:1768px;
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
export default InputListingPage2;
