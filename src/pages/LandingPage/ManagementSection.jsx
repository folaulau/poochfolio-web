import { useNavigate } from 'react-router-dom';

import ManagementImage from './assets/images/management.png';
import CheckMarkSVG from './assets/svgs/check-mark.svg';

const DESCRIPTION = 'Management';
const TITLE = {
  normal: 'Business',
  emphasis: 'Management Features',
};
const LIST = [
  'Pooch profile and intake form',
  'Client management',
  'Instant bookings',
  'Pick-up drop-off API for kennels and groomers',
  'Machine learning SMS integration and automation',
  'Cloud storage and data security',
  'Payroll and Employee management',
  'Add multiple users and set user permissions',
  'Analytics and QuickBooks integration',
  'QuickBooks Connect',
  'POS hardware',
  'Stripe integration',
  'Text to pay',
  'Calendar integration',
  'AI Capital - expand your business!',
];

export const ManagementSection = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/sign-up/signup');
  };

  return (
    <div className="text-center lg:text-left max-w-[1140px] px-[24px] grid grid-rows-[auto_auto] lg:grid-cols-[1fr_1fr] gap-[50px] lg:gap-[24px] lg:items-end mx-auto">
      <div className="">
        <div className="text-black text-[16px] leading-[19px] font-Museo-Sans-Rounded-900 mb-[6px] uppercase">
          {DESCRIPTION}
        </div>
        <div className="text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] font-Museo-Sans-Rounded-900 mb-[36px]">
          <span className="text-dark">{TITLE.normal}</span>{' '}
          <span className="text-primary">{TITLE.emphasis}</span>
        </div>
        <div className="text-[20px] lg:text-[15px] leading-[30px] lg:leading-[22px] text-gray font-Museo-Sans-Rounded-500 lg:mb-[60px] column-count-2 inline-block">
          {LIST.map((item, itemIndex) => (
            <div className="flex items-start mb-[22px] text-left" key={itemIndex}>
              <img className="mr-[22px]" src={CheckMarkSVG} alt="check-mark" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <button
          className="hidden lg:flex bg-blue-light-500 text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-full shadow-primary hover:contrast-125 uppercase w-[247px] h-[68px] justify-center items-center"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </div>

      <div className="-mx-[24px] lg:mx-0">
        <img src={ManagementImage} className="w-full" alt="management" />
      </div>
    </div>
  );
};
