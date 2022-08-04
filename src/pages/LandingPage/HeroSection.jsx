import { useNavigate } from 'react-router-dom';

import HeroBackgroundImg from './assets/images/hero--background.png';

const HeroSectionDesktop = ({ onSignup }) => {
  return (
    <div className="relative hidden lg:block">
      <div className="mx-auto flex justify-center items-center max-h-[1000px] overflow-hidden 2xl:overflow-visible">
        <img src={HeroBackgroundImg} className="w-full min-w-[1400px]" alt="hero-background" />
      </div>
      <div className="absolute left-1/2 w-[587px] -translate-x-[calc(100%+36px)] top-[43%] -translate-y-1/2 max-w-[50%] pr-[50px] pl-[86px]">
        <div className="text-[60px] leading-[72px] font-Museo-Sans-Rounded-900 mb-[28px] mx-auto lg:mx-0">
          <span className="text-primary">Marketing</span>
          {` and `}
          <span className="text-primary">Management</span>
          {` for all Groomers and Kennels`}
        </div>

        <button
          className="hidden lg:flex bg-blue-light text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-[34px] shadow-primary hover:contrast-125 uppercase w-[247px] h-[68px] justify-center items-center"
          onClick={onSignup}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

const HeroSectionMobile = ({ onSignup }) => {
  return <div className="block lg:hidden"></div>;
};

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/sign-up/signup');
  };

  return (
    <>
      <HeroSectionDesktop onSignup={handleSignup} />
      <HeroSectionMobile onSignup={handleSignup} />
    </>
  );
};
