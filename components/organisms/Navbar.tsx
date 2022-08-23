import Link from "next/link"

import Button from "@/components/atoms/Button"
import Logo from "@/components/atoms/Logo"
import HeadsetIcon from "@/components/icons/HeadsetIcon"

interface Props {
  landingLinksVisible?: boolean
  loginVisible?: boolean
  signUpVisible?: boolean
}

export default function Navbar({ landingLinksVisible, loginVisible, signUpVisible }: Props) {
  return (
    <nav className="sticky top-0 z-10 bg-center bg-primary-800">
      <div className="container flex pt-6 pb-10">
        <Logo />

        <div className="flex items-center flex-1">
          {landingLinksVisible && (
            <div className="flex flex-1 text-white justify-evenly">
              <a href="#marketplace" className="hover:underline">
                MARKETPLACE
              </a>
              <a href="#business-management" className="hover:underline">
                MANAGEMENT
              </a>
              <a href="#how-it-works" className="hover:underline">
                HOW IT WORKS
              </a>
            </div>
          )}

          <div className="flex gap-4 ml-auto">
            {loginVisible && (
              <Button variant="filled" size="sm">
                Login
              </Button>
            )}
            {signUpVisible && (
              <Link href="/sign-up" passHref>
                <Button variant="filled" size="sm">
                  Sign Up
                </Button>
              </Link>
            )}
            <Button variant="outlined" size="sm">
              <HeadsetIcon />
              Support
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
