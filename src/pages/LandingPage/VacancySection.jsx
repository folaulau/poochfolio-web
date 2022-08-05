import { useNavigate } from 'react-router-dom';

import VacancyImage from './assets/images/vacancy.png';
import CheckMarkSVG from './assets/svgs/check-mark.svg';

const DESCRIPTION = 'Stop Worrying about Vacancy.';
const TITLE = {
  emphasis: 'The Pooch Marketplace',
  normal: 'has you covered!',
};
const LIST = [
  'Direct listing on the Pooch Marketplace',
  'Dog leads for Groomers, Daycares and Kennels.',
  'Instant bookings for dog hotels seeking minimum vacancy.',
  'Pick-up and drop-off made easy with our custom software.',
];

export const VacancySection = () => {
  const navigate = useNavigate();

  const handleList = () => {
    navigate('/sign-up/signup');
  };

  return (
    <div className="mb-[92px] text-center lg:text-left max-w-[1140px] px-[24px] mx-auto grid grid-rows-[auto_auto] lg:grid-cols-[6fr_5fr] gap-[50px] lg:gap-[24px] lg:items-center">
      <div className="-mx-[24px] lg:mx-0">
        <img src={VacancyImage} className="w-full" alt="vacancy" />
      </div>

      <div>
        <div className="text-black text-[16px] leading-[19px] font-Museo-Sans-Rounded-900 mb-[6px] uppercase">
          {DESCRIPTION}
        </div>
        <div className="text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] font-Museo-Sans-Rounded-900 mb-[28px]">
          <div className="text-primary">{TITLE.emphasis}</div>
          <div className="text-dark">{TITLE.normal}</div>
        </div>
        <div className="text-[20px] lg:text-[15px] leading-[30px] lg:leading-[22px] text-gray font-Museo-Sans-Rounded-500 lg:mb-[30px] inline-block">
          {LIST.map((item, itemIndex) => (
            <div className="flex items-start mb-[28px] text-left" key={itemIndex}>
              <img className="mr-[22px]" src={CheckMarkSVG} alt="check-mark" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          className="block mx-auto h-[68px] px-[70px] bg-blue-light-500 text-primary font-Museo-Sans-Rounded-900 leading-[24px] text-[20px] lg:text-[15px] rounded-full shadow-primary hover:contrast-125 uppercase"
          onClick={handleList}
        >
          <span className="lg:hidden">List Your Business</span>
          <span className="hidden lg:block">List Your Business On Our Marketplace</span>
        </button>
      </div>
    </div>
  );
};
