import Link from "next/link"

import Button from "components/atoms/Button"
import CheckedDescription from "components/molecules/CheckedDescription"

export default function LandingBusinessManagement() {
  return (
    <div id="business-management" className="container flex items-center pt-8 mt-12 gap-9">
      <div className="flex-1">
        <div className="text-16 font-900">MANAGEMENT</div>
        <h2 className="text-40 mt-1 font-900  max-w-[430px]">
          Business <span className="text-primary-darkest">Management Features</span>
        </h2>

        <div className="flex gap-4 mt-9">
          <div className="flex-1 space-y-5">
            <CheckedDescription>Pooch profile and intake form</CheckedDescription>
            <CheckedDescription>Client management</CheckedDescription>
            <CheckedDescription>Instant bookings</CheckedDescription>
            <CheckedDescription>Pick-up drop-off API for kennels and groomers</CheckedDescription>
            <CheckedDescription>Machine learning SMS integration and automation</CheckedDescription>
            <CheckedDescription>Cloud storage and data security</CheckedDescription>
            <CheckedDescription>Payroll and Employee management</CheckedDescription>
            <CheckedDescription>Add multiple users and set user permissions</CheckedDescription>
          </div>

          <div className="flex-1 space-y-5">
            <CheckedDescription>Analytics and QuickBooks integration</CheckedDescription>
            <CheckedDescription>QuickBooks Connect</CheckedDescription>
            <CheckedDescription>POS hardware</CheckedDescription>
            <CheckedDescription>Stripe integration</CheckedDescription>
            <CheckedDescription>Text to pay</CheckedDescription>
            <CheckedDescription>Calendar integration</CheckedDescription>
            <CheckedDescription>AI Capital - expand your business!</CheckedDescription>
          </div>
        </div>

        <Link href="/sign-up" passHref>
          <Button variant="shadowed" size="md" className="mt-16">
            SIGN UP
          </Button>
        </Link>
      </div>

      <div className="flex-1">
        <img src="/images/landing/business-management.png" alt="" className="w-full" />
      </div>
    </div>
  )
}
