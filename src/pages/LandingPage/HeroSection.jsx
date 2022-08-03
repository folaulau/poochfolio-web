import { useNavigate } from 'react-router-dom';
import HeroBackgroundImg from './assets/images/hero--background.png';

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/sign-up/signup');
  };

  return (
    <div>
      <div>
        <img src={HeroBackgroundImg} className="w-full" alt="hero-background" />
      </div>

      <div className="absolute lg:-translate-x-full lg:-translate-y-full lg:left-1/2 lg:top-1/2 left-0 top-[100px] w-full text-center lg:text-left lg:w-auto">
        <div className="text-[60px] leading-[72px] font-Museo-Sans-Rounded-900 w-[476px] mb-[40px] mx-auto lg:mx-0">
          <span className="text-primary">Marketing</span> and{' '}
          <span className="text-primary">Management</span> for all Groomers and Kennels
        </div>

        <button
          className="hidden lg:block py-[25px] px-[92px] bg-blue-light text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-[34px] shadow-primary hover:contrast-125 uppercase"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
