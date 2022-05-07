import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const steps = [
  {
    id: "01",
    name: "Sign Up",
    href: "/sign-up/signup",
    // status: "complete",
    status: "upcoming",
  },
  {
    id: "02",
    name: "Create Profile",
    href: "/sign-up/create-profile",
    // status: "current",
    status: "upcoming",
  },
  {
    id: "03",
    name: "Input Listing",
    href: "/sign-up/input-listing2",
    status: "upcoming",
  },
];

export default function Breadcrumbs() {
  const [signUpSteps, setSignUpSteps] = useState(steps);

  return (
    <>
      <nav className="bg-pooch-blue-2 bg-center bg-cover bg-no-repeat bg-background-header">
        <Header />
      </nav>
      <nav aria-label="Progress" className="w-1/2 mx-auto py-12">
        <ol className="border border-gray-300 rounded-md lg:rounded-full divide-y divide-gray-300 md:flex md:divide-y-0">
          {signUpSteps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {step.status === "complete" ? (
                <Link to={step.href} className="group flex items-center w-full">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#077997] rounded-full group-hover:bg-[#094b5c]">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Link>
              ) : step.status === "current" ? (
                <Link
                  to={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#077997] rounded-full">
                    <span className="text-[#077997]">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-[#077997]">
                    {step.name}
                  </span>
                </Link>
              ) : (
                <Link to={step.href} className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Link>
              )}

              {stepIdx !== signUpSteps.length - 1 ? (
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
