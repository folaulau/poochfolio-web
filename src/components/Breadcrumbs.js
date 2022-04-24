// /* This example requires Tailwind CSS v2.0+ */
// import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

// const pages = [
//   { name: "Sign Up", href: "/", current: true },
//   { name: "Create Profile", href: "/create-profile", current: false },
//   { name: "Input Listing", href: "/input-listing", current: false },
// ];

// export default function Breadcrumbs() {
//   return (
//     <nav className="flex justify-center h-16" aria-label="Breadcrumb">
//       <ol role="list" className="flex items-center space-x-4">
//         {pages.map((page, index) => (
//           <li key={page.name}>
//             <div className="flex items-center">
//               {index !== 0 && (
//                 <ChevronRightIcon
//                   className="flex-shrink-0 h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//               )}
//               <a
//                 href={page.href}
//                 className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//                 aria-current={page.current ? "page" : undefined}
//               >
//                 {page.name}
//               </a>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  { id: "01", name: "Sign Up / Login", href: "/", status: "complete" },
  {
    id: "02",
    name: "Create Profile",
    href: "/create-profile",
    status: "current",
  },
  {
    id: "03",
    name: "Input Listing",
    href: "/input-listing2",
    status: "upcoming",
  },
];

export default function Breadcrumbs() {
  return (
    <nav aria-label="Progress" className="w-1/2 mx-auto py-12">
      <ol
        role="list"
        className="border border-gray-300 rounded-md lg:rounded-full divide-y divide-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex-1 md:flex">
            {step.status === "complete" ? (
              <a href={step.href} className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal-600 rounded-full group-hover:bg-teal-800">
                    <CheckIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="px-6 py-4 flex items-center text-sm font-medium"
                aria-current="step"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-teal-600 rounded-full">
                  <span className="text-teal-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-teal-600">
                  {step.name}
                </span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
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
              </a>
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
  );
}
