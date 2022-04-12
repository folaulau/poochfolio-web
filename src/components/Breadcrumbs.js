/* This example requires Tailwind CSS v2.0+ */
import { KeyIcon, UserIcon, ClipboardListIcon } from '@heroicons/react/solid'

export default function Breadcrumbs() {
  return (
    <nav className='flex h-32 bg-[#e7f0fd] items-center justify-center'>
      <ol className='flex bg-[#ffffff] rounded-full min-w-[390px]' style={{height: '86px'}}>
        <li className='flex flex-1 justify-center'>
          <div className='flex flex-col w-6 self-center gap-y-1'>
            <div className='rounded-full bg-red-100'>
            <KeyIcon />
            </div>
            <p className='text-xs w-12'>
              Sign up
            </p>
          </div>
        </li>
        <li className='flex flex-1 justify-center'>
          <div className='flex flex-col w-6 self-center gap-y-1'>
            <div className='rounded bg-red-100'>
            <UserIcon />
            </div>
            <p className='text-xs w-12'>
              Create Profile
            </p>
          </div>
        </li>
        <li className='flex flex-1 justify-center'>
          <div className='flex flex-col w-6 self-center gap-y-1'>
            <div className='rounded bg-red-100'>
            <ClipboardListIcon />
            </div>
            <p className='text-xs w-12'>
              Input Listing
            </p>
          </div>
        </li>
        {/* <li className='flex-1'>
          <div className='w-11'>
            <UserIcon />
          </div>
          <p className='text-xs'>
            Create Profile
          </p>
        </li>
        <li className='flex-1'>
          <div className='w-11'>
            <ClipboardListIcon />
          </div>
          <p className='text-xs'>
            Input Listing
          </p>
        </li> */}
      </ol>
    </nav>
    // <nav className="flex rounded-full bg-red-100 justify-around" aria-label="Breadcrumb">
    //   <ol role="list" className="bg-white rounded-full shadow px-6 flex space-x-4">
    //     <li className="flex">
    //       <div className="flex flex-col items-center">
    //         <KeyIcon />
    //         <a>
    //           Sign up
    //         </a>
    //         <svg
    //           className="flex-shrink-0 w-6 h-full text-gray-200"
    //           viewBox="0 0 24 44"
    //           preserveAspectRatio="none"
    //           fill="currentColor"
    //           xmlns="http://www.w3.org/2000/svg"
    //           aria-hidden="true"
    //         >
    //           <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
    //         </svg>
    //       </div>
    //     </li>
    //     <li className="flex">
    //       <div className="flex items-center">
    //         <UserIcon />
    //         <a>
    //           Create Profile
    //         </a>
    //         <svg
    //           className="flex-shrink-0 w-6 h-full text-gray-200"
    //           viewBox="0 0 24 44"
    //           preserveAspectRatio="none"
    //           fill="currentColor"
    //           xmlns="http://www.w3.org/2000/svg"
    //           aria-hidden="true"
    //         >
    //           <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
    //         </svg>
    //       </div>
    //     </li>
    //     <li className="flex">
    //       <div className="flex items-center">
    //         <ClipboardListIcon />
    //         <a>
    //           Input Listing
    //         </a>
    //       </div>
    //     </li>
    //   </ol>
    // </nav>
  )
}