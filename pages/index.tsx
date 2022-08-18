import LandingBusinessManagement from "components/organisms/LandingBusinessManagement"
import LandingFooter from "components/organisms/LandingFooter"
import LandingHeader from "components/organisms/LandingHeader"
import LandingHowItWorks from "components/organisms/LandingHowItWorks"
import LandingMarketplace from "components/organisms/LandingMarketplace"
import LandingPoweredBy from "components/organisms/LandingPoweredBy"
import Navbar from "components/organisms/Navbar"

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        <LandingHeader />
        <LandingMarketplace />
        <LandingBusinessManagement />
        <LandingHowItWorks />
        <LandingPoweredBy />
        <LandingFooter />
      </div>
    </div>
  )
}
