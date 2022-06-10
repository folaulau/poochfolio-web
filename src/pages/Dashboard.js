import { useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Menu, Dialog, Transition, Popover } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ClipboardCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Toggle from "../components/common/Toggle";
import GroomerGraphql from "../graphql/GroomerGraphQL";

const navigation = [
  { name: "Reservations", href: "/dashboard", icon: UsersIcon, current: true, iconRef: require("../assessts/images/shape-28.png") },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false, iconRef: require("../assessts/images/calendar-menu.png") },
  {
    name: "Marketplace",
    href: "/marketplace",
    icon: FolderIcon,
    current: false,
    iconRef: require("../assessts/images/marketplace-menu.png")
  },
  { name: "Payments", href: "/payments", icon: CreditCardIcon, current: false, iconRef: require("../assessts/images/payment-menu.png") },
  { name: "Invoice", href: "/invoice", icon: ChartBarIcon, current: false, iconRef: require("../assessts/images/invoice-menu.png") },
  { name: "Employees", href: "/employees", icon: UsersIcon, current: false, iconRef: require("../assessts/images/employees-menu.png") },
  {
    name: "Quickbooks",
    href: "/quickbooks",
    icon: ClipboardCheckIcon,
    current: false,
    iconRef: require("../assessts/images/quickbooks-menu.png")
  },
  { name: "Analytics", href: "analytics", icon: ChartBarIcon, current: false, iconRef: require("../assessts/images/analytics-menu.png") },
  {
    name: "Capital",
    href: "capital",
    icon: CurrencyDollarIcon,
    current: false,
    iconRef: require("../assessts/images/capital-menu.png")
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const user = {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [listingStatus, setListingStatus] = useState(false);
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
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  const tabs = [
    { name: "Incoming Occupants", href: "#", current: true },
    { name: "Unpaid Occupants", href: "#", current: false },
    { name: "Past Reservations", href: "#", current: false },
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
        href: "#",
      },
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
      href: "#",
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
        setListingStatus(groomerInfo?.listing);
        setAllGroomerInfo(groomerInfo);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleBookingClick = (booking) => {
    navigate('/bookingdetails', { state: { booking } });
  }

  const handleListingToggle = () => {
    const putBody = {
      uuid: allGroomerInfo?.uuid,
      on: !listingStatus,
    };
    fetch("https://dev-api.poochapp.net/v1/groomers/toggle-listing", {
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
        setListingStatus(!listingStatus);
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleCheckIn = (bookingUuid) => {
    const putBody = {
      groomerUuid: allGroomerInfo?.uuid, // groomer uuid
      uuid: bookingUuid, // booking uuid
    };
    console.log("putBody:", putBody);

    fetch("https://dev-api.poochapp.net/v1/bookings/checkin", {
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
        alert("Checked In");
        loadProfile();
        // setListingStatus(!listingStatus)
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleCheckOut = (bookingUuid) => {
    const putBody = {
      groomerUuid: allGroomerInfo?.uuid, // groomer uuid
      uuid: bookingUuid, // booking uuid
    };
    console.log("putBody:", putBody);

    fetch("https://dev-api.poochapp.net/v1/bookings/checkout", {
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
        alert("Checked Out");
        loadProfile();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleAcceptBooking = (bookingUuid) => {
    const putBody = {
      uuid: bookingUuid, // booking uuid
      approved: true,
      note: "Accepted",
    };
    console.log("acceptedBooking:", putBody);

    fetch("https://dev-api.poochapp.net/v1/bookings/groomer/approval", {
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
        alert("Checked In");
        loadProfile();
        // setListingStatus(!listingStatus)
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handlecCancelBooking = (bookingUuid) => {
    const putBody = {
      uuid: bookingUuid, // booking uuid 
      reason: "Cancelled by groomer",
    };
    console.log("acceptedBooking:", putBody);

    fetch("https://dev-api.poochapp.net/v1/bookings/cancel", {
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
        alert("Checked In");
        loadProfile();
        // setListingStatus(!listingStatus)
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <>
      <div>
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-pooch-blue-3 shadow-sm lg:static lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                  <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                    <div className="flex-shrink-0 flex items-center">
                      <a href="#" className="flex items-center" alt="groomerImage">
                        <img
                          className="block h-12 w-auto rounded-full mr-2"
                          src={questions[0].author.imageUrl}
                          alt="grommerImage"
                        />
                        <span className="text-pooch-blue-2 font-Museo-Sans-Rounded-700">
                          {allGroomerInfo?.businessName}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 ">
                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                      <div className="w-full ml-5">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative ">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block rounded-full w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      {/* <span className='sr-only'>Open menu</span> */}
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 hover:underline"
                      alt="settings"
                    >
                      <img
                        src={require("../assessts/images/settings-gear.png")}
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                      alt="notifications"
                    >
                      <span className="sr-only">View notifications</span>
                      <img
                        src={require("../assessts/images/notification-bell.png")}
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                  alt={item.name}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                      alt={item.name}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        alt={item.name}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
                  <div className="mt-6 flex justify-center">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:underline"
                      alt="settings"
                    >
                      Go Premium
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-pooch-blue-2">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="/landing-page/poochFolio.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-pooch-blue-3 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md rounded-full py-2 px-4"
                        )}
                        alt={item.name}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-pooch-blue-3 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="/" className="flex-shrink-0 group block" alt="temp-user">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-pooch-blue-2 p-2">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
              <div className="flex items-center justify-center flex-shrink-0 px-4 mb-4">
                <img
                  className="h-12 w-auto"
                  src="/landing-page/poochFolio.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1 bg-pooch-blue-2 ">
                <div className="flex justify-evenly mb-6">
                  <span className="text-white text-sm">LISTING</span>
                  <Toggle
                    toggle={listingStatus}
                    onChange={handleListingToggle}
                  />
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900 justify-evenly"
                        : "text-pooch-blue-3 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md rounded-full py-2 px-4"
                    )}
                    alt={item.name}
                  >
                    {/* {item.name !== "Reservations" && (
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-pooch-blue-3 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    )} */}
                    
                      <img
                      className={classNames(
                          item.current
                            ? "bg-pooch-blue-5 rounded-full h-8 w-8 p-1"
                            : "",
                          "mr-3 flex-shrink-0 h-6 w-6 group-hover:bg-pooch-blue-2 group-hover:rounded-full group-hover:h-8 group-hover:w-8 group-hover:p-1"
                        )}
                        src={item.iconRef}
                      />
                   
                    {item.name}
                    {item.current && (
                      <PlusCircleIcon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-pooch-blue-3 group-hover:text-gray-500",
                          "ml-10 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-10 lg:gap-8 bg-pooch-blue-4">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-2 mt-8">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 "
                    alt="Reservations"
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
                          />
                      Reservations
                    </button>
                  </a>
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    alt="Add Occupant"
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
                          />
                      Add Occupants
                    </button>
                  </a>
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
                  role="list"
                  className="space-y-4 overflow-x-scroll h-64 p-2 "
                >
                  {bookings
                    ?.filter((item) => item.status !== "CHECKED_IN")
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
                  role="list"
                  className="space-y-4 overflow-x-scroll h-64 p-2 "
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
