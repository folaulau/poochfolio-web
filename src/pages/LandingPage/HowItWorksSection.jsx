import { useNavigate } from 'react-router-dom';

import HowItWorks1Image from './assets/images/how-it-works-1.png';
import HowItWorks2Image from './assets/images/how-it-works-2.png';
import HowItWorks3Image from './assets/images/how-it-works-3.png';

export const HowItWorksSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/sign-up/signup');
  };

  return (
    <div className="max-w-[1140px] px-[24px] mx-auto">
      <div className="text-dark text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] mb-[38px] lg:mb-[42px] font-Museo-Sans-Rounded-900 text-center">
        How It Works
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-[36px] lg:gap-[22px] lg:mb-[56px]">
        <div className="">
          <img src={HowItWorks1Image} alt="how-it-works-1" />
        </div>
        <div className="">
          <img src={HowItWorks2Image} alt="how-it-works-2" />
        </div>
        <div className="">
          <img src={HowItWorks3Image} alt="how-it-works-3" />
        </div>
      </div>

      <button
        className="mx-auto hidden lg:flex bg-blue-light-500 text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-full shadow-primary hover:contrast-125 uppercase w-[247px] h-[68px] justify-center items-center"
        onClick={handleSignup}
      >
        Sign up
      </button>
    </div>
  );
};
