/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const pages = [
  { name: "Sign Up", href: "/", current: true },
  { name: "Create Profile", href: "/create-profile", current: false },
  { name: "Input Listing", href: "/input-listing", current: false },
];

export default function Breadcrumbs() {
  return (
    <nav className="flex justify-center h-16" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
