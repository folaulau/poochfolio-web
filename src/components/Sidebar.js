// import { useNavigate } from "react-router-dom";
import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  XIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ClipboardCheckIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';
import Toggle from './common/Toggle';
import GroomerGraphql from '../graphql/GroomerGraphQL';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [listingStatus, setListingStatus] = useState(false);
  const [allGroomerInfo, setAllGroomerInfo] = useState(null);
  const [isActiveTab, setIsActiveTab] = useState(null);
  // const navigate = useNavigate()

  const navigation =[
    {
      name: 'Reservations',
      href: '/dashboard',
      icon: UsersIcon,
      current: false,
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

  const isCurrentTab = () => {
    const name = window.location.pathname;
    console.log('THIS', navigation[0].current, name);
    switch (name) {
      case '/dashboard':
        console.log('1')
        setIsActiveTab("Reservations")
        break;
      case '/calendar':
        console.log('2')
        setIsActiveTab("Calendar")
        break;
      case '/marketplace':
        console.log('3')
        setIsActiveTab("Marketplace")
        break;
      case '/payments':
        console.log('4')
        setIsActiveTab("Payments")
        break;
      case '/invoice':
        console.log('4')
        setIsActiveTab("Invoice")
        break;
      case '/employees':
        console.log('6')
        setIsActiveTab("Employees")
        break;
      case '/quickbooks':
        console.log('7')
        setIsActiveTab("Quickbooks")
        break;
      case '/analytics':
        console.log('8')
        setIsActiveTab("Analytics")
        break;
      case '/capitol':
        console.log('9')
        setIsActiveTab("Capital")
        break;
      default:
        break;
    }
  };

  const handleListingToggle = () => {
    const putBody = {
      uuid: allGroomerInfo?.uuid,
      on: !listingStatus,
    };
    fetch('https://dev-api.poochapp.net/v1/groomers/toggle-listing', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('poochToken'),
      },
      body: JSON.stringify(putBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setListingStatus(!listingStatus);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  useEffect(() => {
    // const data = await startFetchGetGroomer(poochToken);
    // setProfileData(data);
    loadProfile();
    isCurrentTab();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProfile = () => {
    GroomerGraphql.getProfile()
      .then((response) => {
        console.log('Success:', response);
        let groomerInfo = response.data.data?.groomer[0];
        console.log('groomerInfo:', groomerInfo);
        setListingStatus(groomerInfo?.listing);
        setAllGroomerInfo(groomerInfo);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-sidebar-background">
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
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src="/landing-page/poochFolio.svg" alt="Workflow" />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === isActiveTab
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-pooch-blue-3 hover:bg-gray-50 hover:text-gray-900 ',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md rounded-full py-2 px-4 font-Museo-Sans-Rounded-300  ',
                      )}
                      alt={item.name}
                    >
                      <item.icon
                        className={classNames(
                          item.name === isActiveTab
                            ? 'text-gray-500'
                            : 'text-pooch-blue-3 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6',
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 mr-20">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-sidebar-background p-2">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
            <div className="flex items-center justify-center flex-shrink-0 px-4 mb-24">
              <img className="h-12 w-auto" src="/landing-page/poochFolio.svg" alt="Workflow" />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1 bg-transparent mt-8 ">
              <div className="flex justify-evenly mb-6">
                <span className="text-white text-sm font-Museo-Sans-Rounded-500">LISTING</span>
                <Toggle toggle={listingStatus} onChange={handleListingToggle} />
              </div>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.name === isActiveTab
                      ? 'bg-gray-100 text-gray-900 justify-evenly'
                      : 'text-pooch-blue-3 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md rounded-full py-2 px-4  font-Museo-Sans-Rounded-300',
                  )}
                  alt={item.name}
                  onClick={() => isCurrentTab()}
                  style={{marginBottom: 20}}
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
                      item.name === isActiveTab ? 'bg-pooch-blue-2 rounded-full h-8 w-8 p-1' : '',
                      'mr-3 flex-shrink-0 h-6 w-6 group-hover:bg-pooch-blue-2 group-hover:rounded-full group-hover:h-8 group-hover:w-8 group-hover:p-1',
                    )}
                    src={item.iconRef}
                    alt="icon"
                  />

                  {item.name}
                  {item.name === isActiveTab && (
                    <PlusCircleIcon
                      className={classNames(
                        item.name === isActiveTab
                          ? 'text-gray-500'
                          : 'text-pooch-blue-3 group-hover:text-gray-500',
                        'ml-10 flex-shrink-0 h-6 w-6',
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
    </>
  );
};

export default Sidebar;
