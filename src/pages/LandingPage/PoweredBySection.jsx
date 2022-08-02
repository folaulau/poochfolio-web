import { useMemo } from 'react';

import TwillioImage from './assets/images/twillio.png';
import StripeImage from './assets/images/stripe.png';
import AWSImage from './assets/images/aws.png';
import DocuSignImage from './assets/images/docu-sign.png';
import PlaidImage from './assets/images/plaid.png';
import PaypalImage from './assets/images/paypal.png';
import GoogleCloudImage from './assets/images/google-cloud.png';
import MuleSoftImage from './assets/images/mule-soft.png';
import ElasticImage from './assets/images/elastic.png';
import GoogleMapsImage from './assets/images/google-maps.png';

export const PoweredBySection = () => {
  const companyIcons = useMemo(
    () => [
      { label: 'twillio', img: TwillioImage },
      { label: 'stripe', img: StripeImage },
      { label: 'aWS', img: AWSImage },
      { label: 'docu-sign', img: DocuSignImage },
      { label: 'plaid', img: PlaidImage },
      { label: 'paypal', img: PaypalImage },
      { label: 'google-cloud', img: GoogleCloudImage },
      { label: 'mule-soft', img: MuleSoftImage },
      { label: 'elastic', img: ElasticImage },
      { label: 'google-maps', img: GoogleMapsImage },
    ],
    [],
  );

  return (
    <div className="max-w-[1024px] lg:mx-auto pb-[100px] mx-[50px]">
      <div className="flex items-center mb-[30px]">
        <hr className="flex-1 border-primary opacity-[0.2]" />
        <span className="text-gray text-[12px] mx-[32px] uppercase tracking-[2.4px] font-Museo-Sans-Rounded-500">
          Powered By
        </span>
        <hr className="flex-1 border-primary opacity-[0.2]" />
      </div>

      <div className="flex gap-x-[62px] gap-y-[42px] flex-wrap justify-center items-center">
        {companyIcons.map((icon, iconIndex) => (
          <div key={iconIndex}>
            <img src={icon.img} alt={icon.label} />
          </div>
        ))}
      </div>
    </div>
  );
};
