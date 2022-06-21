import { useNavigate } from "react-router-dom";
import React from 'react';
import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import GroomerGraphql from "../graphql/GroomerGraphQL";
import GroomerApi from "../api/GroomerApi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [allGroomerInfo, setAllGroomerInfo] = useState(null);
  const navigate = useNavigate()
  const days = [
    { date: "2021-12-27" },
    { date: "2021-12-28" },
    { date: "2021-12-29" },
    { date: "2021-12-30" },
    { date: "2021-12-31" },
    { date: "2022-01-01", isCurrentMonth: true },
    { date: "2022-01-02", isCurrentMonth: true },
    { date: "2022-01-03", isCurrentMonth: true },
    { date: "2022-01-04", isCurrentMonth: true },
    { date: "2022-01-05", isCurrentMonth: true },
    { date: "2022-01-06", isCurrentMonth: true },
    { date: "2022-01-07", isCurrentMonth: true },
    { date: "2022-01-08", isCurrentMonth: true },
    { date: "2022-01-09", isCurrentMonth: true },
    { date: "2022-01-10", isCurrentMonth: true },
    { date: "2022-01-11", isCurrentMonth: true },
    { date: "2022-01-12", isCurrentMonth: true, isToday: true },
    { date: "2022-01-13", isCurrentMonth: true },
    { date: "2022-01-14", isCurrentMonth: true },
    { date: "2022-01-15", isCurrentMonth: true },
    { date: "2022-01-16", isCurrentMonth: true },
    { date: "2022-01-17", isCurrentMonth: true },
    { date: "2022-01-18", isCurrentMonth: true },
    { date: "2022-01-19", isCurrentMonth: true },
    { date: "2022-01-20", isCurrentMonth: true },
    { date: "2022-01-21", isCurrentMonth: true },
    { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-23", isCurrentMonth: true },
    { date: "2022-01-24", isCurrentMonth: true },
    { date: "2022-01-25", isCurrentMonth: true },
    { date: "2022-01-26", isCurrentMonth: true },
    { date: "2022-01-27", isCurrentMonth: true },
    { date: "2022-01-28", isCurrentMonth: true },
    { date: "2022-01-29", isCurrentMonth: true },
    { date: "2022-01-30", isCurrentMonth: true },
    { date: "2022-01-31", isCurrentMonth: true },
    { date: "2022-02-01" },
    { date: "2022-02-02" },
    { date: "2022-02-03" },
    { date: "2022-02-04" },
    { date: "2022-02-05" },
    { date: "2022-02-06" },
  ];

  const tabs = [
    { name: "Incoming Occupants", href: "/", current: true },
    { name: "Unpaid Occupants", href: "/", current: false },
    { name: "Past Reservations", href: "/", current: false },
  ];

  const questions = [
    {
      id: "81614",
      likes: "29",
      replies: "11",
      views: "2.7k",
      author: {
        name: "Dries Vincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "/",
      },
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
      href: "/",
      title: "Grooming",
      body: `
      <p>1.2 miles away</p>
      
    `,
    },
    // More questions...
  ];


  useEffect(() => {
    // const data = await startFetchGetGroomer(poochToken);
    // setProfileData(data);
    loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProfile = () => {
    GroomerGraphql.getProfile()
      .then((response) => {
        console.log("Success:", response);
        let groomerInfo = response.data.data?.groomer[0];
        console.log("groomerInfo:", groomerInfo);
        setBookings(groomerInfo?.bookings);
        setAllGroomerInfo(groomerInfo);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleBookingClick = (booking) => {
    navigate('/bookingdetails', { state: { booking } });
  }

  const handleCheckIn = (bookingUuid) => {
    GroomerApi.checkin(bookingUuid, allGroomerInfo?.uuid)
      .then((data) => {
        console.log("Success:", data);
        alert("Checked In");
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleCheckOut = (bookingUuid) => {
      GroomerApi.checkout(bookingUuid, allGroomerInfo?.uuid)
      .then((data) => {
        console.log("Success:", data);
        alert("Checked Out");
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleAcceptBooking = (bookingUuid) => {
      GroomerApi.acceptBooking(bookingUuid)
      .then((data) => {
        console.log("Success:", data);
        alert("Checked In");
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handlecCancelBooking = (bookingUuid) => {
      GroomerApi.cancelBooking(bookingUuid)
      .then((data) => {
        console.log("Success:", data);
        alert("Cancel booking");
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <>
      <div>
      <DashboardHeader />
      <Sidebar />
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-10 lg:gap-8 bg-pooch-blue-4">
          <main className="lg:col-span-9 xl:col-span-6 grid grid-rows-2 overflow-hidden">
            <div className="row-span-1">
              {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
              <div className="relative flex justify-between xl:grid xl:grid-cols-4 lg:gap-8">
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-2">
                  <div className="flex items-center justify-between px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">

                    <div className="w-full">
                      <div className="relative">
                        <div className="text-pooch-black-1 font-Museo-Sans-Rounded-700 mb-2">
                          Hotel Occupants
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-transparent border-b border-gray-300  py-2 pl-1 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search for reservations, occupants, etc..."
                          type="search"
                        />
                        <div className="pointer-events-none absolute inset-y-0 top-8 right-0 pl-4 pr-3  flex items-center">
                          <img
                            src={require("../assessts/images/search.png")}
                            className="h-6 w-6 "
                            aria-hidden="true"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-2 mt-8">
                  <span
                    className="text-sm font-medium text-gray-900 "
                  >
                    <button
                      type="button"
                      className=" px-3.5 py-2 shadow flex justify-around border-1 border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                    <img
                            src={require("../assessts/images/plus-sign.png")}
                            aria-hidden="true"
                            alt="plus-sign"
                          />
                      Reservations
                    </button>
                  </span>
                  <span
                    className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    <button
                      type="button"
                      className=" px-3.5 py-2 shadow flex justify-around border-1 border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                     <img
                            src={require("../assessts/images/plus-sign.png")}
                            aria-hidden="true"
                            alt="plus-sign"
                          />
                      Add Occupants
                    </button>
                  </span>
                </div>
              </div>
              {/* </div>  */}
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full  rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-lg  flex divide-x divide-gray-200 mt-3"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          tab.current
                            ? "text-pooch-blue-2"
                            : "text-pooch-blue-3 hover:text-pooch-2",
                          tabIdx === 0 ? "rounded-l-lg" : "text-disabled-gray",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative font-Museo-Sans-Rounded-700 min-w-0 flex-1 border-none overflow-hidden bg-transparent py-4 px-6 text-sm font-medium text-center  focus:z-10"
                        )}
                        alt="Tab"
                      >
                        <span className="flex items-center justify-between">
                          <span>{tab.name}</span>
                          <div className="ml-5 border h-8  border-gray-200" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-1 border-1 bg-local row-span-1 ">
                <ul
                  className="space-y-4 overflow-hidden hover:overflow-y-scroll h-64 p-2 "
                >
                  {bookings
                    ?.filter((item) => (item.status !== "CHECKED_IN"))
                    .filter((item) => (item.status !== "CHECKED_OUT"))
                    .map((item) => (
                      <li
                        key={item.id}
                        className="bg-white px-4 py-6 border shadow sm:p-6 sm:rounded-lg"
                        onClick={() => {
                          // console.log("clicked");
                          handleBookingClick(item);
                        }}
                      >
                        <div className="bg-white  sm:px-6 flex items-center">
                          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                            <div className="flex-shrink-0 flex">
                              <img
                                className="h-14 w-14 rounded-full mr-3"
                                src={questions[0].author.imageUrl}
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm leading-6 font-medium text-gray-900">
                              {item.parent.full_name}
                            </h3>
                            <div className="ml-5 border h-10  border-gray-200" />
                            <div className="ml-4 ">
                              <div>
                                <h2
                                  id={"question-title-" + item.id}
                                  className="mt-4 text-base font-medium text-gray-900"
                                >
                                  {
                                    item?.booking_care_services[0]
                                      ?.toCareService.name
                                  }
                                </h2>
                              </div>
                              <div
                                className="mt-1 text-sm text-gray-700 space-y-4"
                                dangerouslySetInnerHTML={{
                                  __html: `${new Date(
                                    item?.start_date_time
                                  ).toDateString()} - ${new Date(
                                    item.end_date_time
                                  ).toDateString()}`,
                                }}
                              />
                            </div>
                            <div className="ml-8 mt-4 flex-shrink-0">
                              <div className="flex flex-col">
                                {" "}
                                {item.status === "BOOKED" && (
                                  <button
                                    type="button"
                                    className=" px-3.5 py-2 border border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2 self-center w-40 content-center"
                                    style={{ textAlign: "center" }}
                                    onClick={() => {
                                      handleCheckIn(item.uuid);
                                    }}
                                  >
                                    Check-in
                                  </button>
                                )}
                                {item.status !== "BOOKED" && (
                                  <>
                                  <button
                                    type="button"
                                    className=" px-3.5 py-2 border border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                                    onClick={() => {
                                      handleAcceptBooking(item.uuid);
                                    }}
                                  >
                                    Accept Booking
                                  </button>
                                  <button
                                    type="button"
                                    className="mt-2 px-3.5 py-2 border border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                                    onClick={() => {
                                      handlecCancelBooking(item.uuid);
                                    }}
                                  >
                                    Cancel Booking
                                  </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="row-span-1">
              {" "}
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full  rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-lg  flex divide-x divide-gray-200 mt-3"
                    aria-label="Tabs"
                  >
                    {["Current Occupants"].map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          tab.current
                            ? "pooch-black-1"
                            : "pooch-black-1 hover:text-pooch-2",
                          tabIdx === 0 ? "rounded-l-lg" : "text-disabled-gray",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative font-Museo-Sans-Rounded-700 min-w-0 flex-1 border-none overflow-hidden bg-transparent py-4 px-6 text-sm font-medium text-center  focus:z-10"
                        )}
                        alt={tab.name}
                      >
                        <span className="flex items-center justify-between">
                          <span>Current Occupants</span>
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <ul
                  className="space-y-4 overflow-hidden hover:overflow-y-scroll h-64 p-2 "
                >
                  {bookings
                    ?.filter((item) => item.status === "CHECKED_IN")
                    .map((item) => (
                      <li
                        key={item.id}
                        className="bg-white px-4 py-6 border shadow sm:p-6 sm:rounded-lg"
                      >
                        <div className="bg-white  sm:px-6 flex items-center">
                          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                            <div className="flex-shrink-0 flex">
                              <img
                                className="h-14 w-14 rounded-full mr-3"
                                src={questions[0].author.imageUrl}
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm leading-6 font-medium text-gray-900">
                              {item.parent.full_name}
                            </h3>
                            <div className="ml-5 border h-10  border-gray-200" />
                            <div className="ml-4 ">
                              <div>
                                <h2
                                  id={"question-title-" + item.id}
                                  className="mt-4 text-base font-medium text-gray-900"
                                >
                                  {
                                    item?.booking_care_services[0]
                                      ?.toCareService.name
                                  }
                                </h2>
                              </div>
                              <div
                                className="mt-1 text-sm text-gray-700 space-y-4"
                                dangerouslySetInnerHTML={{
                                  __html: `${new Date(
                                    item?.start_date_time
                                  ).toDateString()} - ${new Date(
                                    item.end_date_time
                                  ).toDateString()}`,
                                }}
                              />
                            </div>
                            <div className="ml-8 mt-4 flex-shrink-0">
                              <div className="flex flex-col">
                                {" "}
                                <button
                                  type="button"
                                  className=" px-3.5 py-2 border border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2 self-center w-40 content-center"
                                  style={{ textAlign: "center" }}
                                  onClick={() => {
                                    handleCheckOut(item.uuid);
                                  }}
                                >
                                  Check-Out
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </main>
          <aside className="hidden xl:block xl:col-span-4 ">
            <div className="sticky top-4 space-y-4 shadow-xl bg-white">
              <div className="sticky top-4 space-y-4">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                  <div className="flex items-center text-gray-900">
                    <button
                      type="button"
                      className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Previous month</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <div className="flex-auto font-Museo-Sans-Rounded-700">January</div>
                    <button
                      type="button"
                      className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Next month</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500 font-Museo-Sans-Rounded-700">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                  </div>
                  <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-calendar-gray text-sm shadow ring-1 ring-gray-200 font-Museo-Sans-Rounded-700  pb-8">
                    {days.map((day, dayIdx) => (
                      <button
                        key={day.date}
                        type="button"
                        className={classNames(
                          "py-1.5 hover:bg-gray-100 focus:z-10",
                          day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                          (day.isSelected || day.isToday) && "font-semibold",
                          day.isSelected && "text-white",
                          !day.isSelected &&
                            day.isCurrentMonth &&
                            !day.isToday &&
                            "text-gray-900",
                          !day.isSelected &&
                            !day.isCurrentMonth &&
                            !day.isToday &&
                            "text-gray-400",
                          day.isToday && !day.isSelected && "text-indigo-600",
                          dayIdx === 0 && "rounded-tl-lg",
                          dayIdx === 6 && "rounded-tr-lg",
                          dayIdx === days.length - 7 && "rounded-bl-lg",
                          dayIdx === days.length - 1 && "rounded-br-lg"
                        )}
                      >
                        <time
                          dateTime={day.date}
                          className={classNames(
                            "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                            day.isSelected && day.isToday && "bg-indigo-600",
                            day.isSelected && !day.isToday && "bg-gray-900"
                          )}
                        >
                          {day.date.split("-").pop().replace(/^0/, "")}
                        </time>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
