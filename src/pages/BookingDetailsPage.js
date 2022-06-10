import { useLocation, useNavigate } from "react-router-dom";
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
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import GroomerGraphql from "../graphql/GroomerGraphQL";

const navigation = [
  { name: "Reservations", href: "/dashboard", icon: UsersIcon, current: true },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false },
  {
    name: "Marketplace",
    href: "/marketplace",
    icon: FolderIcon,
    current: false,
  },
  { name: "Payments", href: "/payments", icon: CreditCardIcon, current: false },
  { name: "Invoice", href: "/invoice", icon: ChartBarIcon, current: false },
  { name: "Employees", href: "/employees", icon: UsersIcon, current: false },
  {
    name: "Quickbooks",
    href: "/quickbooks",
    icon: ClipboardCheckIcon,
    current: false,
  },
  { name: "Analytics", href: "analytics", icon: ChartBarIcon, current: false },
  {
    name: "Capital",
    href: "capital",
    icon: CurrencyDollarIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BookingDetails() {
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
  const { state } = useLocation();
  const navigate = useNavigate();

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
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

  useEffect(() => {}, [bookings]);

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
                      <a href="#" className="flex items-center" alt="parent-image">
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
                      alt="settings link"
                    >
                      <img
                        src={require("../assessts/images/settings-gear.png")}
                        className="h-6 w-6"
                        aria-hidden="true"
                        alt="settings"
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                      alt="notification link"
                    >
                      <span className="sr-only">View notifications</span>
                      <img
                        src={require("../assessts/images/notification-bell.png")}
                        className="h-6 w-6"
                        aria-hidden="true"
                        alt="notification icon"
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
                            alt="user-image"
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
                                  alt="user-navigation"
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
                      alt="navigation"
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
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
                        alt="user-image"
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
                        alt="user-navigation"
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
                      alt="settings link"
                    >
                      Clear
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
                        alt="sidebar-navigation"
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
                  <a href="/" className="flex-shrink-0 group block" alt="temp-profile">
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
            <div className="flex-shrink-0 w-14"></div>
          </Dialog>
        </Transition.Root>

        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 overflow-x-scroll">
          <div className="flex justify-center mb-8">
            <span className="text-6xl font-Museo-Sans-Rounded-900 text-center">
              Booking Details
            </span>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
            <a href="#" className="block hover:bg-gray-50" alt="information-care">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-Museo-Sans-Rounded-900 text-pooch-black-1 truncate">
                    Information
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Pet Parent Name:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.parent.full_name}</p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Dog Name:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.booking_pooches[0].full_name}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/**Dates */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
            <a href="#" className="block hover:bg-gray-50" alt="dates-section">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-Museo-Sans-Rounded-900 text-pooch-black-1 truncate">
                    Dates
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Checked In:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {new Date(state?.booking?.checked_in_at).toDateString()}
                    </p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      End Date:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {new Date(state?.booking?.end_date_time).toDateString()}
                    </p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Pick Up/ Drop Off:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.pick_up_cost ? "Yes" : "N/A"}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
            <a href="#" className="block hover:bg-gray-50" alt="services-card">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-Museo-Sans-Rounded-900 text-pooch-black-1 truncate">
                    Services
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {
                        state?.booking?.booking_care_services[0]?.toCareService
                          ?.name
                      }
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*cost breakdown*/}
          <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
            <a href="#" className="block hover:bg-gray-50" alt="cost-breakdown-card">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-Museo-Sans-Rounded-900 text-pooch-black-1 truncate">
                    Cost Breakdown
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {
                        state?.booking?.booking_care_services[0]?.toCareService
                          ?.name
                      }
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p> ${state?.booking?.booking_care_services[0]?.price}</p>
                  </div>
                </div>

                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500"></p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      <span className="mr-3 font-Museo-Sans-Rounded-900">
                        Total
                      </span>
                      ${state?.booking?.booking_care_services[0]?.price}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*pet Details*/}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <a href="#" className="block hover:bg-gray-50" alt="pet-details-card">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-Museo-Sans-Rounded-900 text-pooch-black-1 truncate">
                    Pet Details
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Pet Name:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.booking_pooches[0].full_name}</p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Breed:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.booking_pooches[0]?.breed ?? "N/A"}</p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Gender:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.booking_pooches[0]?.gender}</p>
                  </div>
                </div>
                <div className=" border-t h-1 mt-1 border-gray-200" />
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Size:
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{state?.booking.booking_pooches[0]?.size ?? "N/A"}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center xl:col-span-2 mt-8 w-full mb-8">
            <a href="#" className="text-sm font-medium text-gray-900 " alt="accept-reservation-button">
              <button
                type="button"
                className=" px-3.5 py-2 shadow flex justify-around border-1 border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-pooch-blue-6 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                style={{width: '500px'}}
                onClick={() => {
                  console.log("clicked");
                  handleAcceptBooking(state?.booking?.uuid);
                  navigate("/dashboard");
                }}
              >
              
                Accept Reservation
              </button>
            </a>
            <a
              href="#"
              className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              alt="cancel-reservation-button"
            >
              <button
                type="button"
                className=" px-3.5 py-2 shadow flex justify-around border-1 border-pooch-blue-2 text-sm leading-4 font-medium rounded-full shadow-sm text-pooch-blue-2 bg-white-600 hover:bg-pooch-blue-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-center w-40 text-center"
                style={{width: '500px'}}
                onClick={() => {
                  console.log("clicked");
                  handlecCancelBooking(state?.booking?.uuid);
                  navigate("/dashboard");
                }}
              >
                
               Cancel Reservation
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
