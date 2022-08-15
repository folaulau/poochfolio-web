import Footer from "components/organisms/Footer";
import LandingBusinessManagement from "components/organisms/LandingBusinessManagement";
import LandingHeader from "components/organisms/LandingHeader";
import LandingHowItWorks from "components/organisms/LandingHowItWorks";
import LandingNavbar from "components/organisms/LandingNavbar";
import LandingPoweredBy from "components/organisms/LandingPoweredBy";
import LandingMarketplace from "components/organisms/LandingMarketplace";

export default function Landing() {
  return (
    <div>
      <LandingNavbar />
      <LandingHeader />
      <LandingMarketplace />
      <LandingBusinessManagement />
      <LandingHowItWorks />
      <LandingPoweredBy />
      <Footer />
    </div>
  );
}
