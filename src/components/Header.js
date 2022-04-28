import React from "react";

export default function Header() {
  return (
    // <header className='px-5 lg:px-44 gap-x-4 lg:gap-x-8 bg-pooch-blue-2 bg-center bg-cover bg-no-repeat bg-background-header h-36 flex items-center justify-around'>
    <header className="sm:px-5 sm:max-w-5xl sm:mx-auto h-36 flex items-center justify-around">
      <a href="/">
        <img src="/poochFolio.svg" width={120} height={54} alt="Poochfolio" />
      </a>

      <button className="sm:ml-auto rounded-full px-6 py-4 bg-white font-Museo-Sans-Rounded-500 bg-pooch-blue-1 flex align-center">
        <img className="shrink-0" src="/headset-icon.svg" alt="Support" />
        <span className="ml-3.5 text-pooch-blue-2">Support</span>
      </button>
      <img className="sm:ml-5" src="/profile-icon.svg" alt="Poochfolio" />
    </header>
  );
}
