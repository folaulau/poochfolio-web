import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';

const LoginHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#077997] text-white font-Museo-Sans-Rounded-500 flex h-40 items-center justify-evenly">
      <a href="/">
        <img src="/landing-page/poochFolio.svg" alt="img" />
      </a>
      <nav className="hidden md:flex w-6/12 justify-evenly items-baseline uppercase">
        <Link to="/signup" className="border rounded-full bg-[#ebfdff] text-[#077997] py-2 px-6">
          Sign Up
        </Link>
      </nav>
      <button className="rounded-full px-4 py-2 border border-white flex gap-x-3.5">
        <img className="h-5" src="/landing-page/headset.svg" alt="Docusign" />
        Support
      </button>

      <button className="pointer md:hidden">
        <MenuAlt3Icon className="h-14" onClick={() => setIsOpen(true)} />
      </button>
      <nav
        className={`fixed top-0 w-full bg-[#edfafe] left-0 h-full overflow-x-hidden overflow-y-scroll p-4 z-20 ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        <button className="float-right pointer" onClick={() => setIsOpen(false)}>
          <XIcon className="h-8 bg-[#077997]" />
        </button>
      </nav>
    </header>
  );
};

export default LoginHeader;
