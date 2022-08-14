import Button from "components/atoms/Button";

export default function LandingHeader() {
  return (
    <div className="relative">
      <img src="/images/landing/header.png" alt="" className="w-full" />
      <div className="container absolute inset-x-0 bottom-1/3">
        <div className="w-1/2 pb-8 pr-10 xl:pb-14 2xl:pb-36">
          <h1 className="text-54 xl:text-60 font-900">
            <span className="text-primary-darkest">Marketing</span> and{" "}
            <span className="text-primary-darkest">Management</span> for all
            Groomers and Kennels
          </h1>
          <Button variant="shadowed" size="md" className="mt-5">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
}
