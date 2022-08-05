import { useNavigate } from 'react-router-dom';

import HeroBackgroundImg from './assets/images/hero--background.png';
import HeroBackgroundMobileImg from './assets/images/hero--background-mobile.png';

const HeroSectionDesktop = ({ onSignup }) => {
  return (
    <div className="relative hidden lg:block">
      <div className="mx-auto flex justify-center items-center max-h-[1000px] overflow-hidden 2xl:overflow-visible">
        <img src={HeroBackgroundImg} className="w-full min-w-[1400px]" alt="hero-background" />
      </div>
      <div className="absolute left-1/2 w-[612px] -translate-x-[calc(100%+36px)] top-[47%] -translate-y-1/2 max-w-[50%] pr-[50px] pl-[86px]">
        <div className="text-[60px] leading-[72px] font-Museo-Sans-Rounded-900 mb-[28px] mx-auto lg:mx-0">
          <span className="text-primary">Marketing</span>
          <span className="text-dark"> and </span>
          <span className="text-primary">Management</span>
          <span className="text-dark"> for all Groomers and Kennels</span>
        </div>
        <button
          className="hidden lg:flex bg-blue-light-500 text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-full shadow-primary hover:contrast-125 uppercase w-[247px] h-[68px] justify-center items-center"
          onClick={onSignup}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

const HeroSectionMobile = () => {
  return (
    <div className="relative block overflow-hidden lg:hidden">
      <div className="bg-blue-light-300">
        <div className="pt-[105px] px-[24px] max-w-[730px] mx-auto text-[45px] leading-[54px] font-Museo-Sans-Rounded-900 text-center">
          <span className="text-primary">Marketing</span>
          <span className="text-dark"> and </span>
          <span className="text-primary">Management</span>
          <span className="text-dark"> for all Groomers and Kennels</span>
        </div>
      </div>
      <div className="-ml-[6px] -mr-[7px] max-h-[1500px] flex items-end justify-center">
        <img src={HeroBackgroundMobileImg} className="w-full" alt="hero-background" />
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/sign-up/signup');
  };

  return (
    <>
      <HeroSectionDesktop onSignup={handleSignup} />
      <HeroSectionMobile />
    </>
  );
};
