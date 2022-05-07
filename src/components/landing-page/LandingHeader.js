import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#077997] text-white font-Museo-Sans-Rounded-500 flex h-40 items-center justify-evenly">
      <img src="/landing-page/poochFolio.svg" />
      <nav className="hidden md:flex w-6/12 justify-evenly items-baseline uppercase">
        <Link to="">Marketplace</Link>
        <Link to="">Management</Link>
        <Link to="">How It Works</Link>
        <button className="border rounded-full bg-[#ebfdff] text-[#077997] py-2 px-6">
          <Link to="/signin">Sign In</Link>
        </button>
        <button className="border rounded-full bg-[#ebfdff] text-[#077997] py-2 px-6">
          <Link to="/signup">Sign Up</Link>
        </button>
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
          !isOpen ? "hidden" : ""
        }`}
      >
        <button
          className="float-right pointer"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="h-8 bg-[#077997]" />
        </button>
        <div className="ml-4 flex flex-col text-center text-[#077997] text-2xl">
          <a className="mb-4 leading-8 block">Marketplace</a>
          <a className="mb-4 leading-8 block">Management</a>
          <a className="mb-4 leading-8 block">How it works</a>
          <a className="mb-4 leading-8 block">Investor relations</a>
          <a className="mb-4 leading-8 block">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;