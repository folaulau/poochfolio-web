import { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

export default function Breadcrumbs() {
  let location = useLocation();
const [createProfileStatus, setCreateProfileStatus] = useState('complete')
const [inputListingStatus, setInputListingStatus] = useState('upcoming');
const [AvailableStatus, setAvailableStatus] = useState('upcoming');
  useEffect(() => {
    console.log('send', 'pageview', location.pathname);
    if(location.pathname === '/sign-up/input-listing2'){
      setInputListingStatus('complete')
    }
     if (location.pathname === '/sign-up/availability1') {
       setAvailableStatus('complete');
     }
  }, [location]);

  const steps = [
    {
      id: '01',
      name: 'Sign Up',
      href: '/sign-up/signup',
      status: 'complete',
      iconComplete: require('../assessts/images/signUpCompleteIcon.png'),
    },
    {
      id: '02',
      name: 'Create Profile',
      href: '/sign-up/create-profile',
      status: createProfileStatus,
      iconComplete: require('../assessts/images/profileComplete.png'),
      iconNotComplete: require('../assessts/images/createProfileNotComplete.png'),
    },
    {
      id: '03',
      name: 'Input Listing',
      href: '/sign-up/input-listing2',
      status: inputListingStatus,
      iconComplete: require('../assessts/images/InputComplete.png'),
      iconNotComplete: require('../assessts/images/inputNotComplete.png'),
    },
    {
      id: '04',
      name: 'Availability',
      href: '/sign-up/availability1',
      status: AvailableStatus,
      iconNotComplete: require('../assessts/images/AvailabaleNotComplete.png'),
      iconComplete: require('../assessts/images/AvailabilityCompleted.png'),
    },
  ];

  return (
    <>
      <nav className="bg-pooch-blue-2 bg-center bg-cover bg-no-repeat">
        <Header />
      </nav>
      <nav
        aria-label="Progress"
        className="justify-center mx-auto py-8 "
        style={{
          display: 'flex',
          borderWidth: 4,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: -25,
          borderColor: 'transparent',
          backgroundColor: '#E7F0FD',
        }}
      >
        <ol
          className="border border-gray-300 rounded-md lg:rounded-full divide-y divide-gray-300 md:flex md:divide-y-0"
          style={{
            width: '1108px',
            height: '64px',
            backgroundColor: 'white',
            borderColor: '#C9D9EF',
            borderWidth: 1,
            borderRadius: '32px',
          }}
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {step.status === 'complete' && step.id === '01' ? (
                <Link
                  to={step.href}
                  className="group flex items-center w-full"
                  style={{
                    backgroundColor: '#EBFDFF',
                    boxShadow: '0px 10px 15px #DFECFF',
                    borderWidth: 3,
                    borderColor: 'transparent',
                    height: '100%',
                    borderBottomLeftRadius: '32px',
                    borderTopLeftRadius: '32px',
                    width: '100%',
                  }}
                >
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#077997] rounded-full group-hover:bg-[#094b5c]">
                      <img style={{ height: 42, width: 42 }} src={step.iconComplete} />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                </Link>
              ) : step.status === 'complete' && step.id != '01' && step.id != '04' ? (
                <Link
                  to={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium "
                  aria-current="step"
                  style={{
                    backgroundColor: '#EBFDFF',
                    boxShadow: '0px 10px 15px #DFECFF',
                    borderWidth: 3,
                    borderColor: 'transparent',
                    height: '100%',
                    // borderBottomLeftRadius: '32px',
                    // borderTopLeftRadius: '32px',
                    width: '100%',
                  }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#077997] rounded-full">
                    <img style={{ height: 42, width: 42 }} src={step.iconComplete} />
                  </span>
                  <span className="ml-4 text-sm font-medium text-[#077997]">{step.name}</span>
                </Link>
              ) : step.status === 'complete' && step.id === '04' ? (
                <Link
                  to={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium "
                  aria-current="step"
                  style={{
                    backgroundColor: '#EBFDFF',
                    boxShadow: '0px 10px 15px #DFECFF',
                    borderWidth: 3,
                    borderColor: 'transparent',
                    height: '100%',
                    borderBottomRightRadius: '32px',
                    borderTopRightRadius: '32px',
                    width: '100%',
                  }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#077997] rounded-full">
                    <img style={{ height: 42, width: 42 }} src={step.iconComplete} />
                  </span>
                  <span className="ml-4 text-sm font-medium text-[#077997]">{step.name}</span>
                </Link>
              ) : step.status === 'current' ? (
                <Link
                  to={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium "
                  aria-current="step"
                  style={{
                    backgroundColor: '#EBFDFF',

                    borderWidth: 3,
                    borderColor: 'transparent',
                    height: '100%',
                    // borderBottomLeftRadius: '32px',
                    // borderTopLeftRadius: '32px',
                    width: '100%',
                    // borderTopRightRadius: '32px',
                    // borderBottomRightRadius: '32px',
                  }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#077997] rounded-full">
                    <img style={{ height: 24, width: 18.95 }} src={step.iconComplete} />
                  </span>
                  <span className="ml-4 text-sm font-medium text-[#077997]">{step.name}</span>
                </Link>
              ) : (
                <Link to={step.href} className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <img style={{ height: 24, width: 18.95 }} src={step.iconNotComplete} />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Link>
              )}
              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
      <Outlet />
    </>
  );
}
