import aws from "assets/images/brands/aws.svg"
import cometchat from "assets/images/brands/cometchat.svg"
import docuSign from "assets/images/brands/docu-sign.svg"
import elastic from "assets/images/brands/elastic.svg"
import googleCloud from "assets/images/brands/google-cloud.svg"
import intuit from "assets/images/brands/intuit.svg"
import muleSoft from "assets/images/brands/mule-soft.svg"
import paypal from "assets/images/brands/paypal.svg"
import stripe from "assets/images/brands/stripe.svg"
import twilio from "assets/images/brands/twilio.svg"

import Divider from "components/atoms/Divider"

const topRow = { twilio, stripe, aws, docuSign, intuit, paypal }
const bottomRow = { googleCloud, muleSoft, elastic, cometchat }

export default function PoweredByMobile() {
  return (
    <div className="container pt-32 bg-white">
      <Divider className="px-6">POWERED BY</Divider>
      <div className="mt-20">
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(topRow).map((name) => (
            <img key={name} className="p-4 pb-10 flex m-auto" src={topRow[name as keyof typeof topRow]} alt={name} />
          ))}
           {Object.keys(bottomRow).map((name) => (
            <img key={name} className="p-4 pb-10 flex m-auto" src={bottomRow[name as keyof typeof bottomRow]} alt={name} />
          ))}
        </div>
      </div>
    </div>
  )
}
