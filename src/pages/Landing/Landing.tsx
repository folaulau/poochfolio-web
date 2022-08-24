import Navbar from "components/organisms/Navbar"

import BusinessManagement from "./BusinessManagement"
import HowItWorks from "./HowItWorks"
import LandingFooter from "./LandingFooter"
import LandingHeader from "./LandingHeader"
import Marketplace from "./Marketplace"
import PoweredBy from "./PoweredBy"

export default function Landing() {
  return (
    <div>
      <Navbar landingLinksVisible loginVisible signUpVisible />
      <div className="overflow-x-hidden">
        <LandingHeader />
        <Marketplace />
        <BusinessManagement />
        <HowItWorks />
        <PoweredBy />
        <LandingFooter />
      </div>
    </div>
  )
}
