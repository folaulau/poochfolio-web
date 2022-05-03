import { Link } from "react-router-dom";
import H3 from "../components/landing-page/H3";
import FootH3 from "../components/landing-page/FootH3";
import H2 from "../components/landing-page/H2";
import ListItem from "../components/landing-page/ListItem";
import FootListItem from "../components/landing-page/FootListItem";
import Button from "../components/landing-page/Button";
import LogoClouds from "../components/LogoClouds";

export default function Home2() {
  const losAngelesCounty = [
    "Venice, CA",
    "Santa Monica, CA",
    "Culver City",
    "Marina Del Rey, Ca",
    "Malibu",
    "Beverly Hills",
    "Calabasas",
    "Manhattan Beach",
    "Hermosa Beach",
    "Irvine",
    "Laguna Beach",
    "Laguna Niguel",
    "Newport Beach",
  ];

  const nationWideCities = [
    "Los Angeles, CA",
    "San Diego",
    "San Fransciso, CA",
    "Mami, FL",
    "New York, NY",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "Dallas",
    "Austin",
    "Denver",
    "Las Vegas",
  ];

  const features = [
    "List on the Pooch Marketplace",
    "Dog leads from the Pooch Marketplace",
    "Pooch profile and intake form",
    "Client manamgent",
    "Intant Bookings",
    "Pick-up drop-off API for kennels and groomers",
    "Machine learning SMS integration and automation",
    "Cloud storage and data security",
    "Payroll and Employiee managment",
    "Add multiple users and set user permissions",
    "Analyhtics and QuickBooks integration",
    "QuickBooks Connect",
    "POS hardware",
    "Stripe integration",
    "Text to pay",
    "Calendar integration",
    "AI Capital - expand your businesss!",
  ];

  const poochMarketplace = [
    "Direct listing on the Pooch Marketplace.",
    "Dog leads for Groomers, Day-cares and Kennels.",
    "Instant bookings for dog hotels seeking minimum vacancy.",
    "Pick-up and drop-off made easy with our custom software.",
  ];
  const BusinessManagementFeatures = [
    "Pooch profile and intake form",
    "Client management",
    "Instant bookings",
    "Pick-up drop-off API for kennels and grooomers",
    "Machine learning SMS integration and automation",
    "Cloud storage and data security",
    "Payroll and Employee management",
    "Add multiple users and set user permmissions",
    "Analytics and QuickZBooks integration",
    "QuickBooks Connect",
    "POS hardware",
    "Stripe integration",
    "Text to pay",
    "Calendar integration",
    "Al Captial - expand your business!",
  ];

  return (
    <div className="bg-[#077997]">
      <header className="bg-[#077997] text-white font-Museo-Sans-Rounded-500 flex h-40 items-center justify-evenly">
        <div>
          <img src="/landing-page/poochFolio.svg" />
        </div>
        <div>
          <button className="rounded-full px-4 py-2 border border-white flex gap-x-3.5">
            <img
              className="h-5"
              src="/landing-page/headset.svg"
              alt="Docusign"
            />
            Support
          </button>
        </div>
        <img src="/landing-page/menu-icon.svg" className="h-6 text-white" />

        <nav className="hidden">
          <Link to="">Marketplace</Link>
          <Link to="">Management</Link>
          <Link to="">How It Works</Link>
          <Link to="">Login</Link>
          <Link to="">Sign Up</Link>
        </nav>
      </header>
      <main className="bg-white rounded-t-2xl font-Museo-Sans-Rounded-900">
        <h1 className="text-[45px] mx-7 text-center text-[#333333] pt-28">
          <span className="text-[#077997]">Marketing</span> and{" "}
          <span className="text-[#077997]">Management</span> for all Groomers
          and Kennels
        </h1>
        <img src="/landing-page/dog@3x.webp" className="mt-12" />
        <img src="/landing-page/poochapp3screens.webp" className="mt-12" />
        <section className="mx-7">
          <H3 text="Stop worrying about vacancy." />
          <H2
            text="The Pooch Marketplace"
            colorText="has you covered!"
            cl={true}
          />
          <ul>
            {poochMarketplace.map((item) => (
              <ListItem text={item} />
            ))}
          </ul>
          <Button text="List Your Business On Our Marketplace" />
        </section>
        <section className="mx-7">
          <H3 text="Management" />
          <H2 text="Business" colorText="Management Features" />
          <ul>
            {BusinessManagementFeatures.map((item) => (
              <ListItem text={item} />
            ))}
          </ul>
          <div>
            <Button text="Sign Up" />
          </div>
        </section>
        <img src="/landing-page/statistics@3x.webp" className="mt-14" />
        <section className="flex flex-col items-center mt-14">
          <H2 text="How It Works" />
          <img src="/landing-page/dogstep2.svg" />
          <img src="/landing-page/dogstep2.svg" />
          <img src="/landing-page/dogstep3.svg" />
        </section>
        <section className="flex flex-col items-center justify-center mt-16">
          <h5 className="relative top-3 bg-white h-fit w-fit px-8 font-Museo-Sans-Rounded-500 text-pooch-gray-1">
            POWERED BY
          </h5>
          <div className="border-t-2 ">
            <LogoClouds />
          </div>
        </section>{" "}
      </main>
      <footer className="text-white pb-20">
        <section className="flex flex-col items-center mt-14">
          <div>
            <img src="/landing-page/poochFolio.svg" className="mb-7" />
          </div>
          <div className="text-[#c0ebf6] text-center">
            <h4>319 North Venice Blvd.</h4>
            <h4>Venice, CA 90291</h4>
            <h4>info@poochapp.com</h4>
            <h4 className="mt-7 font-Museo-Sans-Rounded-900">
              Pooch Marketplace
            </h4>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div>
              <img src="/landing-page/apps-store@3x.webp" className="h-14" />
            </div>
            <div>
              <img src="/landing-page/google-play@3x.webp" className="h-14" />
            </div>
          </div>
        </section>
        <section className="ml-10 mt-10">
          <FootH3 text="Los Angeles County" />
          <ul className="ml-5">
            {losAngelesCounty.map((city) => (
              <FootListItem text={city} />
            ))}
          </ul>

          <FootH3 text="Nationwide" className="mt-4" />
          <ul className="ml-5">
            {nationWideCities.map((city) => (
              <FootListItem text={city} />
            ))}
          </ul>

          <FootH3 text="Features" />
          <ul className="ml-5">
            {features.map((feature) => (
              <FootListItem text={feature} />
            ))}
          </ul>
        </section>
        <section className="flex justify-around mx-20 mt-20">
          <img src="/landing-page/linkedin-icon.svg" />
          <img src="/landing-page/linkedin-icon.svg" />
          <img src="/landing-page/linkedin-icon.svg" />
          <img src="/landing-page/linkedin-icon.svg" />
        </section>
        <section className="flex flex-col items-center mt-7 text-sm font-Museo-Sans-Rounded-300 text-[#c0ebf6]">
          <h6 className="uppercase">
            &#169; 2022 Pooch technologies inc &#169; Poochfolio LLC.
          </h6>
          <div className="flex gap-x-4 mt-4">
            <h6>Investor Relations</h6>|<h6>Licensing</h6>|
            <h6>Privacy Policy</h6>
          </div>
        </section>
      </footer>
    </div>
  );
}
