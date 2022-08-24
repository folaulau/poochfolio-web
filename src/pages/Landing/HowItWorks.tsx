import { Link } from "react-router-dom"

import curveFillImage from "assets/images/landing/curve-fill.svg"
import howItWorksImage1 from "assets/images/landing/how-it-works-1.svg"
import howItWorksImage2 from "assets/images/landing/how-it-works-2.svg"
import howItWorksImage3 from "assets/images/landing/how-it-works-3.svg"

import Button from "components/atoms/Button"
import HowItWorksCard from "components/molecules/HowItWorksCard"

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="relative pt-8 mt-36">
      <img
        src={curveFillImage}
        alt=""
        className="absolute top-[20%] xl:top-[23%] 2xl:top-[2%] transform scale-[250%] -translate-x-[10%] z-[-1]"
      />
      <div className="container">
        <h2 className="text-center text-40 font-900">How It Works</h2>
        <div className="flex items-end gap-6 mt-20">
          <HowItWorksCard bgImage={howItWorksImage1} className="max-w-[140px]">
            Sign Up and Input a Listing
          </HowItWorksCard>
          <HowItWorksCard bgImage={howItWorksImage2} className="max-w-[170px]">
            Accept Bookings
          </HowItWorksCard>
          <HowItWorksCard bgImage={howItWorksImage3} className="max-w-[210px]">
            Grow and Manage Your Business The New Way
          </HowItWorksCard>
        </div>
        <div className="flex justify-center mt-14">
          <Link to="/sign-up">
            <Button variant="shadowed" size="lg">
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
