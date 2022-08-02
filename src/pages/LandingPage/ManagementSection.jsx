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
    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-center gap-[28px] mb-[150px] mx-[50px]">
      <div className="lg:max-w-[525px] w-full">
        <div className="text-black text-[16px] leading-[19px] font-Museo-Sans-Rounded-900 mb-[6px] uppercase">
          {DESCRIPTION}
        </div>
        <div className="text-[40px] leading-[48px] font-Museo-Sans-Rounded-900 mb-[42px]">
          <span className="text-dark">{TITLE.normal}</span>{' '}
          <span className="text-primary">{TITLE.emphasis}</span>
        </div>
        <div className="text-[15px] text-gray leading-[22px] font-Museo-Sans-Rounded-500 mb-[50px] column-count-2">
          {LIST.map((item, itemIndex) => (
            <div className="flex items-start mb-[28px]" key={itemIndex}>
              <img className="mr-[22px]" src={CheckMarkSVG} alt="check-mark" />
              {item}
            </div>
          ))}
        </div>

        <button
          className="hidden lg:block py-[25px] px-[92px] bg-blue-light text-primary font-Museo-Sans-Rounded-900 text-[15px] rounded-[34px] shadow-primary hover:contrast-125 uppercase"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </div>

      <div className="-mr-[90px] -ml-[90px] lg:ml-0 w-[calc(100%+140px)] lg:w-auto">
        <img src={ManagementImage} className="w-full" alt="management" />
      </div>
    </div>
  );
};
