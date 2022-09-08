import marketplaceImage from "assets/images/landing/marketplace.png"
import { Link } from 'react-router-dom';
import Button from "components/atoms/Button"
import CheckedDescription from "components/molecules/CheckedDescription"

export default function Marketplace() {
  return (
    <div id="marketplace" className="container flex items-center gap-10 -mt-16 pt-40">
      <div className="flex-1">
        <img src={marketplaceImage} alt="" className="w-full" />
      </div>

      <div className="flex-1">
        <div className="text-16 font-900">STOP WORRYING ABOUT VACANCY.</div>
        <h2 className="text-40 mt-1 font-900  max-w-[460px]">
          <span className="text-primary-800">The Pooch Marketplace</span> has you covered!
        </h2>

        <div className="mt-6 space-y-7">
          <CheckedDescription>Direct listing on the Pooch Marketplace.</CheckedDescription>
          <CheckedDescription>Dog leads for Groomers, Daycares and Kennels.</CheckedDescription>
          <CheckedDescription>
            Instant bookings for dog hotels seeking minimum vacancy.
          </CheckedDescription>
          <CheckedDescription>
            Pick-up and drop-off made easy with our custom software.
          </CheckedDescription>
        </div>
        <Link to="/sign-up/signup">
          <Button variant="shadowed" size="lg" className="mt-8">
            LIST YOUR BUSINESS ON OUR MARKETPLACE
          </Button>
        </Link>
      </div>
    </div>
  )
}
