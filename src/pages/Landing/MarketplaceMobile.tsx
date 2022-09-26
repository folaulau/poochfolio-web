import marketplaceMobileImage from "assets/images/landing/iphone-mobile.png"
import { Link } from 'react-router-dom';
import Button from "components/atoms/Button"
import CheckedDescription from "components/molecules/CheckedDescription"

export default function MarketplaceMobile() {
  return (
    <div id="marketplace" className="container flex flex-col items-center gap-10 p-3 bg-white">
      <div className="flex-1">
        <img src={marketplaceMobileImage} alt="" className="w-full max-w-[450px]" />
      </div>

      <div className="flex-1 p-3">
        <div className="text-16 font-900">STOP WORRYING ABOUT VACANCY.</div>
        <h2 className="mt-3 font-900" style={{ fontSize: 30, lineHeight: '38px' }}>
          <span className="text-primary-800">The Pooch Marketplace</span> has you covered!
        </h2>

        <div className="mt-6 space-y-7 text-[#666666]" style={{ fontSize: 20 }}>
          <CheckedDescription isMobile>Direct listing on the Pooch Marketplace.</CheckedDescription>
          <CheckedDescription isMobile>Dog leads for Groomers, Daycares and Kennels.</CheckedDescription>
          <CheckedDescription isMobile>
            Instant bookings for dog hotels seeking minimum vacancy.
          </CheckedDescription>
          <CheckedDescription isMobile>
            Pick-up and drop-off made easy with our custom software.
          </CheckedDescription>
        </div>
        <Link to="/sign-up/signup" className="flex justify-center">
          <Button variant="shadowed" size="md" className="mt-16 mb-16" style={{ fontWeight: 'bold', fontSize: 16, lineHeight: '20px' }}>
            LIST YOUR BUSINESS ON OUR MARKETPLACE
          </Button>
        </Link>
      </div>
    </div>
  )
}
