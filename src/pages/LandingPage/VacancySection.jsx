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
    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-center gap-[45px] lg:gap-[30px] mb-[90px] lg:mb-[110px] mx-[50px]">
      <div className="-ml-[45px] -mr-[45px] lg:mr-0 w-[calc(100%+90px)] lg:w-auto">
        <img src={VacancyImage} className="w-full" alt="vacancy" />
      </div>

      <div className="lg:mb-[110px] w-full lg:w-auto">
        <div className="text-black text-[16px] leading-[19px] font-Museo-Sans-Rounded-900 mb-[6px] uppercase">
          {DESCRIPTION}
        </div>
        <div className="text-[40px] leading-[48px] font-Museo-Sans-Rounded-900 mb-[20px]">
          <div className="text-primary">{TITLE.emphasis}</div>
          <div className="text-dark">{TITLE.normal}</div>
        </div>
        <div className="text-[15px] leading-[22px] text-gray font-Museo-Sans-Rounded-500 mb-[20px]">
          {LIST.map((item, itemIndex) => (
            <div className="flex items-start mb-[24px]">
              <img className="mr-[22px]" src={CheckMarkSVG} alt="check-mark" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          className="py-[25px] px-[60px] lg:px-[70px] w-full lg:w-auto bg-blue-light text-primary font-Museo-Sans-Rounded-900 text-[20px] lg:text-[15px] rounded-[34px] shadow-primary hover:contrast-125 uppercase"
          onClick={handleList}
        >
          List Your Business On Our Marketplace
        </button>
      </div>
    </div>
  );
};
