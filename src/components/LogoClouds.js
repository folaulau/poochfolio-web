/* This example requires Tailwind CSS v2.0+ */
export default function LogoClouds() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/twilio.svg" alt="Twilio" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/stripe.svg" alt="Stripe" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/aws.svg" alt="AWS" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/salesForce.svg" alt="SalesForce" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-10"
            src="/intuit.svg"
            alt="Intuit"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-10"
            src="/docusign.svg"
            alt="Docusign"
          />
        </div>
      </div>
    </div>
  )
}
