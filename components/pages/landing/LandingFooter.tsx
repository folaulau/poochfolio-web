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
              319 North Venice Blvd. Venice, CA 90291 info@poochapp.com
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
                <li>Culver City</li>
                <li>Marina Del Rey</li>
                <li>Malibu</li>
                <li>Beverly Hills</li>
                <li>Calabasas</li>
                <li>Manhattan Beach</li>
                <li>Hermosa Beach</li>
                <li>Irvine</li>
                <li>Laguna Beach</li>
                <li>Laguna Niguel</li>
                <li>Newport Beach</li>
              </ul>
            </div>

            <div className="col-span-2">
              <FooterTitle>NATIONWIDE</FooterTitle>
              <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                <li>Los Angeles, CA</li>
                <li>San Diego</li>
                <li>San Francisco, CA</li>
                <li>Miami, FL</li>
                <li>New York, NY</li>
                <li>Chicago</li>
                <li>Houston</li>
                <li>Phoenix</li>
                <li>Philadelphia</li>
                <li>Dallas</li>
                <li>Austin</li>
                <li>Denver</li>
                <li>Las Vegas</li>
              </ul>
            </div>

            <div className="col-span-5">
              <FooterTitle>FEATURES</FooterTitle>
              <div className="flex gap-14 2xl:gap-16">
                <ul className="mt-5 text-12 font-300 list-disc pl-3.5 leading-4">
                  <li>List on the Pooch Marketplace</li>
                  <li>Dog leads from the Pooch Market place</li>
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
                  <li>AI Capital - expand your business!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-24 text-12 font-300">
          <div className="flex flex-1 w-2/5 gap-3">
            <div>Investor Relations</div>|<div>Licensing</div>|<div>Privacy Policy</div>
          </div>

          <div className="w-2/5 text-center">© 2022 POOCH TECHNOLOGIES INC © POOCHFOLIO LLC</div>

          <div className="flex justify-end flex-1 gap-8 text-white">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </div>
        </div>
      </div>
    </footer>
  )
}
