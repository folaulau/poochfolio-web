import H3 from "../components/landing-page/H3";
import React from 'react';
import FootH3 from "../components/landing-page/FootH3";
import H2 from "../components/landing-page/H2";
import ListItem from "../components/landing-page/ListItem";
import FootListItem from "../components/landing-page/FootListItem";
import Button from "../components/landing-page/Button";
import LogoClouds from "../components/LogoClouds";
import {
  losAngelesCounty,
  nationWideCities,
  features,
  poochMarketplace,
  BusinessManagementFeatures,
} from "../data/landingPage";
import LandingHeader from "../components/landing-page/LandingHeader";

export default function Home2() {
  return (
    <div className="bg-[#077997]">
      <LandingHeader />
      <main className="bg-white rounded-t-2xl font-Museo-Sans-Rounded-900">
        <h1 className="text-[45px] mx-7 text-center text-[#333333] pt-28 md:max-w-[465px] md:text-left md:relative md:z-10">
          <span className="text-[#077997]">Marketing</span> and{" "}
          <span className="text-[#077997]">Management</span> for all Groomers
          and Kennels
        </h1>
        <div className="hidden md:block md:z-20 md:absolute">
          <Button text="Sign Up" />
        </div>
        <img src="/landing-page/dog@3x.webp" alt="dog" className="mt-12 md:hidden" />
        <img
          src="/landing-page/sliderbackground.png"
          className="hidden top-[160px] md:block md:absolute "
          alt="dog"
        />
        <img
          src="/landing-page/poochapp3screens.webp"
          className="mt-12 md:w-1/2 md:mt-96"
          alt="dog"
        />
        <section className="mx-7">
          <H3 text="Stop worrying about vacancy." />
          <H2
            text="The Pooch Marketplace"
            colorText="has you covered!"
            cl={true}
          />
          <ul>
            {poochMarketplace.map((item) => (
              <ListItem text={item} key={item} />
            ))}
          </ul>
          <Button text="List Your Business On Our Marketplace" />
        </section>
        <section className="mx-7 mt-20">
          <H3 text="Management" />
          <H2 text="Business" colorText="Management Features" />
          <ul>
            {BusinessManagementFeatures.map((item) => (
              <ListItem text={item} key={item} />
            ))}
          </ul>
          <div>
            <Button text="Sign Up" />
          </div>
        </section>
        <img src="/landing-page/statistics@3x.webp" className="mt-14" alt="dog" />
        <section className="flex flex-col items-center mt-14">
          <H2 text="How It Works" />
          <img src="/landing-page/dogstep1.svg" alt="dog" />
          <img src="/landing-page/dogstep2.svg"  alt="dog"/>
          <img src="/landing-page/dogstep3.svg" alt="dog" />
        </section>
        <section className="flex flex-col items-center justify-center mt-16">
          <h5 className="relative top-3 bg-white h-fit w-fit px-8 font-Museo-Sans-Rounded-500 text-pooch-gray-1">
            POWERED BY
          </h5>
          <div className="border-t-2 ">
            <LogoClouds />
          </div>
        </section>{" "}
      </main>
      <footer className="text-white pb-20">
        <section className="flex flex-col items-center mt-14">
          <div>
            <img src="/landing-page/poochFolio.svg" className="mb-7"  alt="dog"/>
          </div>
          <div className="text-[#c0ebf6] text-center">
            <h4>319 North Venice Blvd.</h4>
            <h4>Venice, CA 90291</h4>
            <h4>info@poochapp.com</h4>
            <h4 className="mt-7 font-Museo-Sans-Rounded-900">
              Pooch Marketplace
            </h4>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div>
              <img src="/landing-page/apps-store@3x.webp" className="h-14"  alt="dog"/>
            </div>
            <div>
              <img src="/landing-page/google-play@3x.webp" className="h-14" alt="dog" />
            </div>
          </div>
        </section>
        <section className="ml-10 mt-10">
          <FootH3 text="Los Angeles County" />
          <ul className="ml-5">
            {losAngelesCounty.map((city) => (
              <FootListItem text={city} key={city} />
            ))}
          </ul>

          <FootH3 text="Nationwide" className="mt-4" />
          <ul className="ml-5">
            {nationWideCities.map((city) => (
              <FootListItem text={city} key={city} />
            ))}
          </ul>

          <FootH3 text="Features" />
          <ul className="ml-5">
            {features.map((feature) => (
              <FootListItem text={feature} key={feature} />
            ))}
          </ul>
        </section>
        <section className="flex justify-around mx-20 mt-20">
          <img src="/landing-page/linkedin-icon.svg" alt="dog" />
          <img src="/landing-page/linkedin-icon.svg"  alt="dog"/>
          <img src="/landing-page/linkedin-icon.svg"  alt="dog"/>
          <img src="/landing-page/linkedin-icon.svg"  alt="dog"/>
        </section>
        <section className="flex flex-col items-center mt-7 text-sm font-Museo-Sans-Rounded-300 text-[#c0ebf6]">
          <h6 className="uppercase">
            &#169; 2022 Pooch technologies inc &#169; Poochfolio LLC.
          </h6>
          <div className="flex gap-x-4 mt-4">
            <h6>Investor Relations</h6>|<h6>Licensing</h6>|
            <h6>Privacy Policy</h6>
          </div>
        </section>
      </footer>
    </div>
  );
}
