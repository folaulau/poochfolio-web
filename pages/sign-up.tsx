import { useState } from "react"

import SignUpBreadcrumb from "@/components/molecules/SignUpBreadcrumb"
import Footer from "@/components/organisms/Footer"
import Navbar from "@/components/organisms/Navbar"
import CreateProfile from "@/components/pages/sign-up/CreateProfile"
import InputListing from "@/components/pages/sign-up/InputListing"
import SignUpForm from "@/components/pages/sign-up/SignUpForm"

export default function SignUp() {
  const [step, setStep] = useState(0)

  return (
    <div className="flex flex-col h-screen">
      <Navbar loginVisible />
      <div className="relative z-20 pt-10 pb-6 -mt-4 bg-primary-300 rounded-t-2xl">
        <div className="container">
          <SignUpBreadcrumb step={step} />
        </div>
      </div>
      <div className="h-[5px] bg-white" />
      <div className="flex flex-col flex-1 overflow-auto bg-primary-100">
        <div className="flex-1">
          {step === 0 && <SignUpForm onSuccess={() => setStep(1)} />}
          {step === 1 && <CreateProfile onSuccess={() => setStep(2)} />}
          {step === 2 && <InputListing />}
        </div>
        <Footer />
      </div>
    </div>
  )
}
