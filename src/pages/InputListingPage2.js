import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import { useDropzone } from "react-dropzone";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const InputListingPage2 = () => {
  const [enabled, setEnabled] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: false,
  });

  const files = acceptedFiles.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center text-[15px] font-Museo-Sans-Rounded-500">
      <div className="w-1/2 mt-12">
        <div className="py-2 min-w-full">
          <div className="overflow-hidden ring-1 ring-gray-300 rounded-xl">
            <table className="min-w-full bg-white">
              <thead
                className="border-b "
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
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Dog Daycare
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {/* <span>$</span> */}
                    <input
                      type="number"
                      className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold"
                    />
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <input className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold" />
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <input className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold" />
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan="5" className="py-4">
                    <button className="flex mx-auto items-center gap-x-1">
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
            checked={enabled}
            onChange={setEnabled}
            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
              )}
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
              )}
            />
          </Switch>
        </div>
        <div className="flex py-8 px-7 justify-between">
          <h1>Do You Offer Pick Up Services?</h1>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
              )}
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
              )}
            />
          </Switch>
        </div>
        <div className="flex pb-8 px-7 justify-between">
          <h1>Do You Offer Drop Off Services?</h1>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
              )}
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
              )}
            />
          </Switch>
        </div>
        <div className="flex pb-8 px-7 justify-between">
          <h1>How Much Do You Charge Per Mile?</h1>
          <input
            type="number"
            className="w-24 bg-[#ebfdff] rounded-2xl h-9 text-center text-[#41a3bb] font-semibold border border-[#81d6e6]"
          />
        </div>
      </div>

      <div className="w-1/2">
        <div className="flex py-8 justify-between">
          <h1>What is the Maximum Occupancy at Your Business?</h1>
          <h1 className="text-[#077977] font-bold">80 Dogs</h1>
        </div>
        <input type="range" className="w-full accent-[#077997]" />
        <div className="flex py-8 justify-between">
          <h1>1 Dog</h1>
          <h1>200 Dogs</h1>
        </div>
      </div>

      <div className="w-1/2 mt-6">
        <h1>Description</h1>
        <textarea
          className="w-full rounded-2xl border h-32 border-[#81d6e6] bg-inherit pt-6 pl-8"
          style={{ boxShadow: "inset 0px 0px 10px #81d6e6" }}
          placeholder="Type description"
        ></textarea>
      </div>

      <div
        className="w-1/2 mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40"
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <ul>{files}</ul>
      </div>
      <div className="w-1/2 mt-6 border border-[#81d6e6] border-dashed border-2 rounded-2xl bg-white h-40"></div>

      <div className="w-1/2 flex justify-center">
        <button
          type="submit"
          className="mt-8 justify-center uppercase w-3/4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
        >
          Post listing
        </button>{" "}
      </div>
    </div>
  );
};

export default InputListingPage2;
