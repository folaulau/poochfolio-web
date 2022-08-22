import Divider from "@/components/atoms/Divider"

const topRows = ["twilio", "stripe", "aws", "docu-sign", "plaid", "paypal"]
const bottomRows = ["google-cloud", "mule-soft", "elastic", "google-maps"]

export default function PoweredBy() {
  return (
    <div className="container mt-32 mb-40">
      <Divider className="px-6">POWERED BY</Divider>
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
