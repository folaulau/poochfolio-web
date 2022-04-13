import React from 'react'

export default function Header() {
    return (
        <header className='bg-pooch-blue-2 bg-center bg-cover bg-no-repeat bg-background-header h-36 flex items-center justify-around'>
                <div>
                    <img src="/poochFolio.svg" width={120} height={54} />
                </div>
                <div>
                    <button className='rounded-full px-6 py-4 bg-white font-Museo-Sans-Rounded-500 bg-pooch-blue-1 flex align-center'>
                        <img className='shrink-0' src="/headset-icon.svg" />
                        <span className='ml-3.5 text-pooch-blue-2'>
                            Support
                        </span>
                    </button>
                </div>
                <div>
                    <img src="/profile-icon.svg" />
                </div>
        </header>
    )
}
