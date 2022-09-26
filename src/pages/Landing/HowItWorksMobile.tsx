import howItWorksImage1 from 'assets/images/landing/how-it-works-1.svg';
import howItWorksImage2 from 'assets/images/landing/how-it-works-2.svg';
import howItWorksImage3 from 'assets/images/landing/how-it-works-3.svg';

import HowItWorksCard from 'components/molecules/HowItWorksCard';

export default function HowItWorksMobile() {
  return (
    <div id="how-it-works" className="relative bg-white pt-32">
      <div className="container z-10">
        <h2 className="text-center text-40 font-900">How It Works</h2>
        <div className="flex flex-col items-center gap-6 mt-20">
          <HowItWorksCard bgImage={howItWorksImage1} className="max-w-[140px]">
            Sign Up and Input a Listing
          </HowItWorksCard>
          <HowItWorksCard bgImage={howItWorksImage2} className="max-w-[170px]">
            Accept Bookings
          </HowItWorksCard>
          <HowItWorksCard bgImage={howItWorksImage3} className="max-w-[210px]">
            Grow and Manage Your Business The New Way
          </HowItWorksCard>
        </div>
      </div>
    </div>
  );
}
