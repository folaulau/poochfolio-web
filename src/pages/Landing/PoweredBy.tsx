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

export default function PoweredBy() {
  return (
    <div className="container my-40">
      <Divider className="px-6">POWERED BY</Divider>
      <div className="mt-20">
        <div className="flex items-center justify-around">
          {Object.keys(topRow).map((name) => (
            <img key={name} src={topRow[name as keyof typeof topRow]} alt={name} />
          ))}
        </div>
        <div className="flex items-center justify-around w-3/4 mx-auto mt-20">
          {Object.keys(bottomRow).map((name) => (
            <img key={name} src={bottomRow[name as keyof typeof bottomRow]} alt={name} />
          ))}
        </div>
      </div>
    </div>
  )
}
