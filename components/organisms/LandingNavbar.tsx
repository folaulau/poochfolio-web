import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";
import HeadsetIcon from "components/atoms/HeadsetIcon";

export default function LandingNavbar() {
  return (
    <nav className="bg-[url(/images/navbar.svg)] bg-center">
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
            <Button variant="filled" size="sm">
              Sign Up
            </Button>
            <Button variant="outlined" size="sm">
              <HeadsetIcon />
              Support
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
