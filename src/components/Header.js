import React from "react";
import { onShowLiveChat } from "support";

export default function Header() {

  const onShowChat = () => {
    onShowLiveChat()
  }
  return (
    // <header className='px-5 lg:px-44 gap-x-4 lg:gap-x-8 bg-pooch-blue-2 bg-center bg-cover bg-no-repeat bg-background-header h-36 flex items-center justify-around'>
    <header
      className="sm:px-5 sm:max-w-5xl sm:mx-auto h-36 flex items-center justify-around"
      style={{ height: 110, paddingBottom: 25 }}
    >
      <a href="/">
        <img src="/poochFolio.svg" width={119.97} height={53.25} alt="Poochfolio" />
      </a>

      <button
        className="sm:ml-auto rounded-full px-6 py-4  font-Museo-Sans-Rounded-500 flex align-center"
        style={{ borderWidth: 2, borderColor: '#FFFFFF', width: '148.53px', height: '45.66px' }}
        onClick={onShowChat}
      >
        <img className="shrink-0" src="/landing-page/headset.svg" alt="Support" style={{alignSelf:'center'}}/>
        <span className="ml-3.5 text-pooch-blue-2" style={{ color: '#ffffff', alignSelf:'center' }}>
          Support
        </span>
      </button>
      {/* <img className="sm:ml-5" src="/profile-icon.svg" alt="Poochfolio" /> */}
    </header>
  );
}
