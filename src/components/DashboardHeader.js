import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Menu, Transition, Popover } from '@headlessui/react';
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
  ChevronDownIcon,
} from '@heroicons/react/outline';
import GroomerGraphql from '../graphql/GroomerGraphQL';

const navigation = [
  {
    name: 'Reservations',
    href: '/dashboard',
    icon: UsersIcon,
    current: true,
    iconRef: require('../assessts/images/paw-menu.png'),
  },
  {
    name: 'Calendar',
    href: '/calendar',
    icon: CalendarIcon,
    current: false,
    iconRef: require('../assessts/images/calendar-menu.png'),
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    icon: FolderIcon,
    current: false,
    iconRef: require('../assessts/images/marketplace-menu.png'),
  },
  {
    name: 'Payments',
    href: '/payments',
    icon: CreditCardIcon,
    current: false,
    iconRef: require('../assessts/images/payment-menu.png'),
  },
  {
    name: 'Invoice',
    href: '/invoice',
    icon: ChartBarIcon,
    current: false,
    iconRef: require('../assessts/images/invoice-menu.png'),
  },
  {
    name: 'Employees',
    href: '/employees',
    icon: UsersIcon,
    current: false,
    iconRef: require('../assessts/images/employees-menu.png'),
  },
  {
    name: 'Quickbooks',
    href: '/quickbooks',
    icon: ClipboardCheckIcon,
    current: false,
    iconRef: require('../assessts/images/quickbooks-menu.png'),
  },
  {
    name: 'Analytics',
    href: 'analytics',
    icon: ChartBarIcon,
    current: false,
    iconRef: require('../assessts/images/analytics-menu.png'),
  },
  {
    name: 'Capital',
    href: 'capital',
    icon: CurrencyDollarIcon,
    current: false,
    iconRef: require('../assessts/images/capital-menu.png'),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DashboardHeader = () => {
  const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };
  const [allGroomerInfo, setAllGroomerInfo] = useState(null);

  const userNavigation = [
    { name: 'Your Profile', href: '/' },
    { name: 'Settings', href: '/' },
    { name: 'Sign out', href: '/' },
  ];

  const questions = [
    {
      id: '81614',
      likes: '29',
      replies: '11',
      views: '2.7k',
      author: {
        name: 'Dries Vincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '/',
      },
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      href: '/',
      title: 'Grooming',
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
    GroomerGraphql.getOnlyProfile()
      .then((response) => {
        console.log('Success:', response);
        let groomerInfo = response.data.data?.groomer[0];
        console.log('profile:', groomerInfo);
        setAllGroomerInfo(groomerInfo);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
  return (
    <div className="dashboard-header">
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-pooch-blue-3 shadow-sm lg:static lg:overflow-y-visible',
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="flex items-center">
                      <img
                        className="block h-12 w-auto rounded-full mr-2"
                        src={questions[0].author.imageUrl}
                        alt="grommer"
                      />
                      <span className="text-pooch-blue-2 font-Museo-Sans-Rounded-700">
                        {allGroomerInfo?.businessName}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 ">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"></div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    {/* <span className='sr-only'>Open menu</span> */}
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <span
                    className="text-sm font-medium text-gray-900 bg-pooch-blue-2 rounded-full h-9 w-9 flex justify-center items-center  place-content-center hover:underline mr-4"
                    alt="settings"
                  >
                    <img
                      src={require('../assessts/images/chat-icon.png')}
                      className="h-5 w-6"
                      aria-hidden="true"
                      alt="settings"
                    />
                  </span>
                  <span
                    className="text-sm font-medium text-gray-900 hover:underline"
                    alt="settings"
                  >
                    <img
                      src={require('../assessts/images/settings-gear.png')}
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt="settings"
                    />
                  </span>
                  <span
                    className="ml-5 flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    alt="notifications"
                    onClick={() => console.log('Notifications')}
                  >
                    <span className="sr-only">View notifications</span>
                    <img
                      src={require('../assessts/images/notification-bell.png')}
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt="notifications"
                    />
                  </span>

                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-5 z-40">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex  ">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="userImg" />
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
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-103  rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 pt-1 focus:outline-none">
                        <p className="font-Museo-Sans-Rounded-700 text-pooch-blue-2 text-lg font-semibold ml-4 mt-4 mb-4">
                          Settings
                        </p>
                        <div className="mb-2">
                          <div className="ml-4 mr-8">
                            <p className="text-sm mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                              Username
                            </p>
                            <div className="flex flex-row justify-between">
                              <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.email}
                              </p>
                              <img
                                src={require('../assessts/images/edit-icon.png')}
                                className="h-4 w-4"
                                aria-hidden="true"
                                alt="notifications"
                              />
                            </div>
                          </div>
                          <div className="ml-4 mr-8 mt-3 mb-4">
                            <p className="text-sm mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                              Password
                            </p>
                            <div className="flex flex-row justify-between">
                              <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                ********
                              </p>
                              <img
                                src={require('../assessts/images/edit-icon.png')}
                                className="h-4 w-4"
                                aria-hidden="true"
                                alt="notifications"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-pooch-blue-4  py-2 rounded-b-lg">
                          <div className="ml-4 mr-8 mt-3  ">
                            <div className="flex flex-row justify-between">
                              <p className="text-sm mb-2 font-Museo-Sans-Rounded-700 text-black-1 text-sm ">
                                Sign Up Info
                              </p>
                              <img
                                src={require('../assessts/images/edit-icon.png')}
                                className="h-4 w-4"
                                aria-hidden="true"
                                alt="edit"
                              />
                            </div>
                          </div>
                          <div className=" bg-pooch-blue-4 grid grid-rows-4 grid-cols-2 gap-4 pr-4 pl-4 ">
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                                First Name
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.firstName}
                                </p>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text--black-1 ">
                                Last Name
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.lastName}
                                </p>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text-black-1 whitespace-nowrap">
                                Business Name
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.businessName}
                                </p>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                                Email Address
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.email}
                                </p>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                                Phone number
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                {allGroomerInfo?.phoneNumber}
                                </p>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text--black-1 ">
                                Address
                              </p>
                              <div className="flex flex-row justify-between">
                                <div>
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                 {` ${allGroomerInfo?.addresses[0]?.city}, ${allGroomerInfo?.addresses[0]?.state}`}
                                </p>
                                </div>
                              </div>
                            </div>
                            <div className=" mr-8  py-2">
                              <p className="text-xs mb-2 font-Museo-Sans-Rounded-700 text-black-1 ">
                                Services
                              </p>
                              <div className="flex flex-row justify-between">
                                <p className="text-xs font-Museo-Sans-Rounded-700 text-pooch-blue-2 font-semibold">
                                 {allGroomerInfo?.careServices[0].name}
                                </p>
                                <ChevronDownIcon className="h-4 w-4 text-pooch-blue-2" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700',
                                )}
                                alt={item.name}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))} */}
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
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium font-Museo-Sans-Rounded-300 text-pooch-blue-2',
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
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium font-Museo-Sans-Rounded-700 text-pooch-blue-2 ">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium font-Museo-Sans-Rounded-500 text-pooch-blue-2">
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
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-Museo-Sans-Rounded-300 text-pooch-blue-2"
                      alt={item.name}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6"></div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
};

export default DashboardHeader;
