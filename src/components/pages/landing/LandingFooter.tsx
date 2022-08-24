import { faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FooterTitle from "@/components/atoms/FooterTitle"
import Logo from "@/components/atoms/Logo"

export default function LandingFooter() {
  return (
    <footer className="pb-8 bg-primary-800 py-28 rounded-t-3xl">
      <div className="container text-primary-400">
        <div className="flex gap-14">
          <div>
            <Logo />

            <div className="mt-11 font-300 max-w-[160px]">
              319 North Venice Blvd. Venice, CA 90291{" "}
              <a href="mailto:info@poochapp.com" className="hover:underline">
                info@poochapp.com
              </a>
            </div>

            <div className="mt-11 text-primary-400 font-900">Pooch Marketplace</div>

            <img src="/images/app-store.png" alt="App Store" className="mt-6" />
            <img src="/images/google-play.png" alt="App Store" className="mt-3" />
          </div>

          <div className="grid flex-1 grid-cols-9 gap-14 2xl:gap-16">
            <div className="col-span-2">
              <FooterTitle>LOS ANGELES COUNTY</FooterTitle>
              <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                <li>Venice, CA</li>
                <li>Santa Monica, CA</li>
                <li>Culver City, CA</li>
                <li>Marina Del Rey, CA</li>
                <li>Malibu, CA</li>
                <li>Beverly Hills, CA</li>
                <li>Calabasas, CA</li>
                <li>Manhattan Beach, CA</li>
                <li>Hermosa Beach, CA</li>
                <li>Irvine, CA</li>
                <li>Laguna Beach, CA</li>
                <li>Laguna Niguel, CA</li>
                <li>Newport Beach, CA</li>
              </ul>
            </div>

            <div className="col-span-2">
              <FooterTitle>NATIONWIDE</FooterTitle>
              <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                <li>Los Angeles, CA</li>
                <li>San Diego, CA</li>
                <li>San Francisco, CA</li>
                <li>Miami, FL</li>
                <li>New York, NY</li>
                <li>Chicago, IL</li>
                <li>Houston, TX</li>
                <li>Phoenix, AZ</li>
                <li>Philadelphia, MS</li>
                <li>Dallas, TX</li>
                <li>Austin, MN</li>
                <li>Denver, CO</li>
                <li>Las Vegas, NV</li>
              </ul>
            </div>

            <div className="col-span-5">
              <FooterTitle>FEATURES</FooterTitle>
              <div className="flex gap-14 2xl:gap-16">
                <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                  <li>Pooch profile and intake form</li>
                  <li>Client management</li>
                  <li>Instant bookings</li>
                  <li>Pick-up drop-off API for kennels and groomers</li>
                  <li>Machine learning SMS integration and automation</li>
                  <li>Cloud storage and data security</li>
                </ul>

                <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                  <li>Payroll and Employee management</li>
                  <li>Add multiple users and set user permissions</li>
                  <li>Analytics and QuickBooks integration</li>
                  <li>QuickBooks Connect</li>
                  <li>POS hardware</li>
                  <li>Stripe integration</li>
                  <li>Text to pay</li>
                  <li>Calendar integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-24 text-12 font-300">
          <div className="flex flex-1 w-2/5 gap-3">
            <a href="" target="_blank" className="hover:underline">
              Investor Relations
            </a>
            |
            <a href="" target="_blank" className="hover:underline">
              Licensing
            </a>
            |
            <a href="" target="_blank" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <div className="w-2/5 text-center">© 2022 POOCH TECHNOLOGIES INC © POOCHFOLIO LLC</div>

          <div className="flex justify-end flex-1 gap-8 text-white">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <a href="https://www.linkedin.com/company/poochfolio/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
