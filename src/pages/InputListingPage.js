import { useState, createRef } from "react";
import React from 'react';
import Dropzone from "react-dropzone";

// import { Switch } from "@headlessui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const services = [
  { name: "Dog Daycare", small: "$150", medium: "$150", large: "$150" },
  { name: "Grooming", small: "$150", medium: "$150", large: "$150" },
  { name: "Overnight", small: "$150", medium: "$150", large: "$150" },
  { name: "Nail Clipping", small: "$150", medium: "$150", large: "$150" },
];

export default function InputListingPage() {
  //   const [enabled, setEnabled] = useState(false);
  const [poochInfo, setPoochInfo] = useState({
    uuid: localStorage.getItem("uuid"),
    instantBooking: false,
    offeredPickUp: false,
    offeredDropOff: false,
    chargePerMile: 0,
    numberOfOcupancy: 0,
    description: "",
    signUpStatus: "COMPLETED",
  });
  const dropzoneRef = createRef();

  const handleBooleanChange = (e) => {
    setPoochInfo({
      ...poochInfo,
      [e.target.name]: !poochInfo[e.target.name],
    });
  };

  const handleNumberChange = (e) => {
    setPoochInfo({
      ...poochInfo,
      [e.target.name]: +e.target.value,
    });
  };

  const handleChange = (e) => {
    setPoochInfo({
      ...poochInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const putBody = {
      ...poochInfo,
    };
    console.log("putBody", putBody);
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
        window.location.replace("http://localhost:3000/dashboard");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    setPoochInfo({
      instantBooking: false,
      offeredPickUp: false,
      offeredDropOff: false,
      chargePerMile: 0,
      numberOfOcupancy: 0,
      description: "",
    });
  };
  return (
    <div className="flex flex-col items-center max-3-xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Services
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Small (1-20 lbs)
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Medium (20-40 lbs)
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Large (40+ lbs)
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {services.map((item) => (
                      <tr key={item.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.small}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.medium}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.large}
                        </td>
                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="/"
                            className="text-teal-600 hover:text-teal-900"
                          >
                            Edit<span className="sr-only">, {item.name}</span>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
      >
        Add Services
      </button>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <tbody className="bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      INSTANT BOOKING?
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {/* <Switch
                        name="instantBooking"
                        checked={enabled}
                        onChange={handleBooleanChange}
                        className={classNames(
                          enabled ? "bg-teal-600" : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch> */}
                      <input
                        type="checkbox"
                        name="instantBooking"
                        value={poochInfo.instantBooking}
                        onChange={handleBooleanChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      Do You Offer Pick Up Service?
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        type="checkbox"
                        name="offeredPickUp"
                        value={poochInfo.offeredPickUp}
                        onChange={handleBooleanChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      Do You Offer Drop Off Service?
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        type="checkbox"
                        name="offeredDropOff"
                        value={poochInfo.offeredDropOff}
                        onChange={handleBooleanChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      How Much Do You Charge Per Mile?
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        type="number"
                        name="chargePerMile"
                        value={poochInfo.chargePerMile}
                        onChange={handleNumberChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6>What is the Maximum Occupancy at Your Business?</h6>
        <input
          type="range"
          name="numberOfOcupancy"
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <h6>Description</h6>
        <textarea
          name="description"
          placeholder="Type description"
          onChange={handleChange}
          value={poochInfo.description}
        ></textarea>
      </div>
      <Dropzone ref={dropzoneRef}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="w-96 h-96 border-black order-dashed rounded-2xl"
            style={{ border: "3px dashed #95e8f7" }}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>{" "}
      <br />
      <Dropzone ref={dropzoneRef}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="w-96 h-96 border-black order-dashed rounded-2xl"
            style={{ border: "3px dashed #95e8f7" }}
          >
            <input {...getInputProps()} />
            <p>Contracts you need your customers to sign</p>
          </div>
        )}
      </Dropzone>{" "}
      <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
        onClick={handleSave}
      >
        Post Listing
      </button>
    </div>
  );
}
