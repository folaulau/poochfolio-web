import MobileNavbar from 'components/organisms/MobileNavbar';
import Navbar from 'components/organisms/Navbar';
import { useEffect, useState } from 'react';
import { onSupport } from 'support';

import BusinessManagement from './BusinessManagement';
import BusinessManagementMobile from './BusinessManagementMobile';
import HowItWorks from './HowItWorks';
import HowItWorksMobile from './HowItWorksMobile';
import LandingFooter from './LandingFooter';
import LandingFooterMobile from './LandingFooterMobile';
import LandingHeader from './LandingHeader';
import LandingHeaderMobile from './LandingHeaderMobile';
import Marketplace from './Marketplace';
import MarketplaceMobile from './MarketplaceMobile';
import PoweredBy from './PoweredBy';
import PoweredByMobile from './PoweredByMobile';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default function Landing() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    onSupport();
  }, [])


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  if(windowSize.innerWidth < 1050) {
    return (
      <div className="font-body text-gray-700 text-15 font-500 min-w-[350px] h-screen bg-white">
        <MobileNavbar />
        <div className="overflow-x-hidden">
          <LandingHeaderMobile />
          <MarketplaceMobile />
          <BusinessManagementMobile />
          <HowItWorksMobile />
          <PoweredByMobile />
          <LandingFooterMobile />
        </div>
      </div>
    )
  } else {
    return (
      <div className="font-body text-gray-700 text-15 font-500 min-w-[1024px] h-screen bg-white">
        <Navbar landingLinksVisible loginVisible signUpVisible />
        <div className="overflow-x-hidden">
          <LandingHeader />
          <Marketplace />
          <BusinessManagement />
          <HowItWorks />
          <PoweredBy />
          <LandingFooter />
        </div>
      </div>
    );
  }
}
