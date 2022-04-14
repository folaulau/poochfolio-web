import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import LogoClouds from '../components/LogoClouds';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Breadcrumbs />
            <main className='flex flex-col items-center bg-pooch-blue-4'>
                <div>
                    <h1 className='text-[36px] text-center font-Museo-Sans-Rounded-900 mt-16 px-10 text-[#333333]'>Minimum Vacancy for All Kennels and Groomers</h1>
                    <section className='flex flex-col items-center justify-center mt-10'>
                        <h5 className='relative top-3 px-4 font-Museo-Sans-Rounded-500 text-pooch-gray-1 bg-pooch-blue-4 text-[15px]'>Continue with</h5>
                        <div className='grid grid-cols-2 p-6 border-2 border-slate-200 rounded-2xl text-pooch-gray-1 text-[19px]'>
                            <Link to="/signup-email-page">
                                <a className='flex flex-col p-8 justify-between items-center gap-y-8'>
                                    <img src='/mail.png' className='self-center w-14 mt-1' />
                                    <span>Email</span>
                                </a>
                            </Link>
                            <a className='flex flex-col p-8 justify-between items-center gap-y-8'>
                                {/* <img src='/google.webp' className='self-center w-14' /> */}
                                <img src='/facebook.svg' className='self-center w-14' />
                                <span>Facebook</span>
                            </a>
                            <a className='flex flex-col p-8 justify-between items-center gap-y-8'>
                                <img src='/google.webp' className='self-center w-14 mt-1' />
                                <span>Google</span>
                            </a>
                            <a className='flex flex-col p-8 justify-between items-center gap-y-8'>
                                <img src='/apple.webp' className='self-center w-14' />
                                <span>Apple</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <img src="/poochfolio-dashboard.webp" width="379px" height="238px" className='mt-10' />
                <section className='flex flex-col items-center justify-center mt-16'>
                    <h5 className='relative top-3 bg-pooch-blue-4 h-fit w-fit px-8 font-Museo-Sans-Rounded-500 text-pooch-gray-1'>POWERED BY</h5>
                    <div className='border-t-2 '>
                        <LogoClouds />
                    </div>
                </section>
            </main>
        </>
    )
}
