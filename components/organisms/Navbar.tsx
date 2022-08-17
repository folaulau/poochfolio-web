import Link from "next/link"

import Button from "components/atoms/Button"
import HeadsetIcon from "components/atoms/HeadsetIcon"
import Logo from "components/atoms/Logo"

export default function Navbar() {
  return (
    <nav className="bg-[url(/images/navbar.svg)] bg-center sticky top-0 z-10">
      <div className="container flex pt-6 pb-10">
        <Logo />

        <div className="flex items-center flex-1">
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

          <div className="flex gap-4">
            <Button variant="filled" size="sm">
              Login
            </Button>
            <Link href="/sign-up" passHref>
              <Button variant="filled" size="sm">
                Sign Up
              </Button>
            </Link>
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
