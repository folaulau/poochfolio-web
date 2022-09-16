import Navbar from 'components/organisms/Navbar';
import { useEffect } from 'react';
import { onSupport } from 'support';

import BusinessManagement from './BusinessManagement';
import HowItWorks from './HowItWorks';
import LandingFooter from './LandingFooter';
import LandingHeader from './LandingHeader';
import Marketplace from './Marketplace';
import PoweredBy from './PoweredBy';

export default function Landing() {
  useEffect(() => {
    onSupport();
  }, [])

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
