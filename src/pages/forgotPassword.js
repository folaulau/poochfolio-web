import React from 'react';
import LandingHeader from "../components/landing-page/LandingHeader";

const ForgotPassword = () => {
  return (
    <>
      <LandingHeader />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-Museo-Sans-Rounded-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            🐾 Forgot your password? 🐶
          </h2>
          <p className="mt-6 px-10 text-center font-Museo-Sans-Rounded-300">
            To reset your password, type the full email address you used to sign
            up for Pooch.com and we'll send you an e-mail to walk you through
            resetting your password.
          </p>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p> */}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#077997] focus:border-[#077997] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
