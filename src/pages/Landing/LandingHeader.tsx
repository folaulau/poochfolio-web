import { Link } from 'react-router-dom';

import headerImage from 'assets/images/landing/header.png';

import Button from 'components/atoms/Button';

export default function LandingHeader() {
  return (
    <div className="relative pt-32">
      <img src={headerImage} alt="" className="w-full -mt-4" style={{ zIndex: -1 }} />
      <div className="container absolute inset-x-0 bottom-1/3 z-10">
        <div className="w-1/2 pb-8 pr-10 xl:pb-14 2xl:pb-36">
          <h1 className="text-54 xl:text-60 font-900">
            <span className="text-primary-800">Marketing</span> and{' '}
            <span className="text-primary-800">Management</span> for Groomers and Kennels
          </h1>
          <Link to="/sign-up/signup">
            <Button variant="shadowed" size="lg" className="mt-5">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
