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
    <div className="mb-[90px] lg:mb-[140px] mx-[50px]">
      <div className="text-dark text-[40px] mb-[48px] font-Museo-Sans-Rounded-900 text-center">
        How It Works
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center mb-[30px]">
        <div className="w-[364px] h-[259px] lg:-mr-[50px]">
          <img src={HowItWorks1Image} alt="how-it-works-1" />
        </div>
        <div className="w-[364px] h-[252px] lg:-mr-[50px]">
          <img src={HowItWorks2Image} alt="how-it-works-2" />
        </div>
        <div className="w-[364px] h-[256px]">
          <img src={HowItWorks3Image} alt="how-it-works-3" />
        </div>
      </div>

      <div className="text-center">
        <button
          className="hidden lg:inline-block py-[25px] px-[92px] bg-blue-light text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-[34px] shadow-primary hover:contrast-125 uppercase"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
