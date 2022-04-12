import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import LogoClouds from '../components/LogoClouds';

export default function Home() {
    return (
        <>
            <Breadcrumbs />
            <main className='flex flex-col items-center'>
                <div>
                    <h1 className='text-4xl text-center font-Museo-Sans-Rounded-900 mt-16'>Minimum Vacancy for All Kennels and Groomers</h1>
                    <section className='flex flex-col items-center justify-center mt-14'>
                        <h5 className='relative top-3 bg-white h-fit w-fit px-4 font-Museo-Sans-Rounded-500 text-pooch-gray-1'>Continue with</h5>
                        <div className='flex h-fit w-fit space-x-6 p-6 border-2 border-slate-200 rounded-2xl flex-wrap'>
                            <div className='flex flex-col gap-y-5'>
                                <img src='/headset-icon.svg' className='self-center w-12' />
                                <span>Email</span>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <img src='/headset-icon.svg' className='self-center w-12' />
                                <span>Facebook</span>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <img src='/headset-icon.svg' className='self-center w-12' />
                                <span>Google</span>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <img src='/headset-icon.svg' className='self-center w-12' />
                                <span>Apple</span>
                            </div>
                        </div>
                    </section>
                </div>
                <img src="/poochfolio-dashboard.webp" width="379px" height="238px" className='mt-10' />
                <section className='flex flex-col items-center justify-center mt-16'>
                    <h5 className='relative top-3 bg-white h-fit w-fit px-4 font-Museo-Sans-Rounded-500 text-pooch-gray-1'>POWERED BY</h5>
                    <div className='border-t-2 '>
                        <LogoClouds />
                    </div>
                </section>
            </main>

        </>

    )
}
