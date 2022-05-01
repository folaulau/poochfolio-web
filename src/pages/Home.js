import { Link } from "react-router-dom";

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
  return (
    <div className="bg-[#077997]">
      <header className="bg-[#077997] text-white font-Museo-Sans-Rounded-500 flex h-40 items-center justify-center">
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
        <h3>Stop worrying about vacancy.</h3>
        <h2>The Pooch Marketplace has you covered!</h2>

        <ul>
          <li>Direct listing on the Pooch Marketplace</li>
          <li>Dog leads for Groomers, Day-cares and Kennels.</li>
          <li>Instant bookings for dog hotels seeking minimum vacancy.</li>
          <li>Pick-up and drop-off made easy with our custom software.</li>
        </ul>
        <button>List Your Business On Our Marketplace</button>

        <section>
          <h3>Management</h3>
          <h2>Business Management Features</h2>
          <ul>
            <li>Pooch profile and intake form</li>
            <li>Client management</li>
            <li>Instant bookings</li>
            <li>Pick-up drop-off API for kennels and grooomers</li>
            <li>Machine learning SMS integration and automation</li>
            <li>Cloud storage and data security</li>
            <li>Payroll and Employee management</li>
            <li>Add multiple users and set user permmissions</li>
            <li>Analytics and QuickZBooks integration</li>
            <li>QuickBooks Connect</li>
            <li>POS hardware</li>
            <li>Stripe integration</li>
            <li>Text to pay</li>
            <li>Calendar integration</li>
            <li>Al Captial - expand your business!</li>
          </ul>
        </section>
        <img src="/landing-page/statistics@3x.webp" className="" />
        <section>
          <h2>How It Works</h2>
        </section>
      </main>
      <footer className="text-white">
        <img src="/landing-page/poochFolio.svg" className="" />
        <h4>329 North Venice Blvd.</h4>
        <h4>Venice, CA 90291</h4>
        <h4>info@poochapp.com</h4>
        <h4>Pooch Marketplace</h4>
        <img src="/landing-page/google-play@3x.webp" className="" />
        <img src="/landing-page/apps-store@3x.webp" className="" />

        <h3>LOS ANGELES COUNTY</h3>
        {losAngelesCounty.map((city) => (
          <h4>{city}</h4>
        ))}

        <h3>NATIONWIDE</h3>
        {nationWideCities.map((city) => (
          <h4>{city}</h4>
        ))}
        <h3>Features</h3>
        {features.map((feature) => (
          <h4>{feature}</h4>
        ))}

        <h6>C 2022 Pooch technologies inc C Poochfolio LLC.</h6>
        <h6>Investor Relations</h6>
        <h6>Licensing</h6>
        <h6>Privacy Policy</h6>
      </footer>
    </div>
  );
}
