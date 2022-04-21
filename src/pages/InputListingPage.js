import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const services = [
    { name: 'Dog Daycare', small: '$150', medium: '$150', large: '$150' },
    { name: 'Grooming', small: '$150', medium: '$150', large: '$150' },
    { name: 'Overnight', small: '$150', medium: '$150', large: '$150' },
    { name: 'Nail Clipping', small: '$150', medium: '$150', large: '$150' },
]

export default function InputListingPage() {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flex flex-col items-center">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Services</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the services in your account including prices for small, medium and large dogs.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add Services
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Services
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Small (1-20 lbs)
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Medium (20-40 lbs)
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Large (40+ lbs)
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {services.map((item) => (
                                            <tr key={item.name}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {item.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.small}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.medium}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.large}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit<span className="sr-only">, {item.name}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            INSTANT BOOKING?
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <Switch
                                                checked={enabled}
                                                onChange={setEnabled}
                                                className={classNames(
                                                    enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}
                                            >
                                                <span className="sr-only">Use setting</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        enabled ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                />
                                            </Switch>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                            Do You Offer Pick Up or Drop Off Services?
                                        </td>
                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                            checkboxes
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                            How Much Do You Charge Per Mile?
                                        </td>
                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                            $150
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h6>What is the Maximum Occupancy at Your Business?</h6>
                <input type="range" />
            </div>


            <div>
                <h6>Description</h6>
                <textarea placeholder='Type description'>

                </textarea>
            </div>

            <div>
                Drag and Drop Images
            </div>
            <div>
                Drag and Drop
                Contract you need your customers to sign
            </div>

            <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
                >
                    Post Listing
                </button>
        </div>

    )
}
