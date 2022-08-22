import Navbar from "@/components/organisms/Navbar"
import BusinessManagement from "@/components/pages/landing/BusinessManagement"
import HowItWorks from "@/components/pages/landing/HowItWorks"
import LandingFooter from "@/components/pages/landing/LandingFooter"
import LandingHeader from "@/components/pages/landing/LandingHeader"
import Marketplace from "@/components/pages/landing/Marketplace"
import PoweredBy from "@/components/pages/landing/PoweredBy"

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
