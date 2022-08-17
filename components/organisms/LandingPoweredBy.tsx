const topRows = ["twilio", "stripe", "aws", "docu-sign", "plaid", "paypal"]
const bottomRows = ["google-cloud", "mule-soft", "elastic", "google-maps"]

export default function LandingPoweredBy() {
  return (
    <div className="container mt-32 mb-40">
      <div className="flex items-center gap-6 px-6">
        <div className="flex-1 border-t border-primary-light" />
        <div className="text-12 font-500">POWERED BY</div>
        <div className="flex-1 border-t border-primary-light" />
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-around">
          {topRows.map((brand) => (
            <img key={brand} src={`/images/brands/${brand}.svg`} alt={brand} />
          ))}
        </div>
        <div className="flex items-center justify-around w-3/4 mx-auto mt-20">
          {bottomRows.map((brand) => (
            <img key={brand} src={`/images/brands/${brand}.svg`} alt={brand} />
          ))}
        </div>
      </div>
    </div>
  )
}
