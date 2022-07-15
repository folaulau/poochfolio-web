import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import LandingHeader from "../components/landing-page/LandingHeader";
import GroomerApi from "../api/GroomerApi";
import FirebaseApi from "../api/FirebaseApi";
import { Button } from 'react-bootstrap';
import googleSvg from "../assessts/images/Google.svg"
import styled from 'styled-components';
import { Museosansrounded500NormalGraniteGra } from '../styledMixins';
const Signup = () => {

  const [userInfo, setUserInfo] = useState({
    email: "folaudev+"+Math.floor(Math.random() * 1000000000)+"@gmail.com",
    password: "Test1234!",
  });

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
const facebookLogin = () => {
  FirebaseApi.signInWithFacebook(navigate)
}
const googleLogin = () => {
  FirebaseApi.signInWithGoogle(navigate)
}
  const handleSubmit = (e) => {

    e.preventDefault();

      FirebaseApi.signUpWithEmail(userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userCredential", userCredential);

        let authentication = {
          "token": user.accessToken
        };

        GroomerApi.authenticate(authentication)
        .then((response) => {
          console.log("Success:", response.data);
          localStorage.setItem("poochToken", response.data.token);
          localStorage.setItem("uuid", response.data.uuid);
          navigate("/sign-up/create-profile");
        })
        .catch((error) => {
          console.log("Error", error);
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <>
      <LandingHeader />
      <div
        className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-Museo-Sans-Rounded-900"
        style={{
          borderWidth: 3,
          borderColor: 'transparent',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          marginTop: -25,
          backgroundColor: '#F3F8FF',
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            🐾 Sign Up for Pooch 🐶
          </h2>
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
            {/* <form className="space-y-6" action="#" method="POST"> */}
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#077997] focus:border-[#077997] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={userInfo.password}
                    onChange={handleInputChange}
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
                  Sign Up
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  onClick={() => facebookLogin()}
                  style={{
                    width: '160px',
                    borderWidth: 1,
                    borderColor: '#C4DFEA',
                    borderRadius: 10,
                    height: '42px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <img src="/facebook.svg" className="self-center w-6" alt="Facebook" />
                </Button>
                <Button
                  onClick={() => googleLogin()}
                  style={{
                    width: '160px',
                    borderWidth: 1,
                    borderColor: '#C4DFEA',
                    borderRadius: 10,
                    height: '42px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <img className="self-center w-6" src={googleSvg} alt={googleSvg} />
                </Button>
                {/* <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <img src="/Google.svg" className="self-center w-14 mt-1" alt="Google" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Powered>
        <PoochTechnologiesInc>Pooch Technologies Inc</PoochTechnologiesInc>
        <PrivacyPolicyTermsOfUse>
          Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp; Terms of Use
        </PrivacyPolicyTermsOfUse>
      </Powered>
    </>
  );
};

const Powered = styled.div`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 100%;
  height: 42px;
  bottom: -300px;
  // left: 3038px;
  top: 948px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--lily-white);
`;

const PoochTechnologiesInc = styled.div`
  // margin-bottom: -30.5px;
  width: 122px;
  height: 25px;
  margin-left: 175px;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

const PrivacyPolicyTermsOfUse = styled.p`
  // margin-bottom: -30.5px;
  width: 153px;
  height: 25px;
  margin-right: 177.5px;
  text-align: right;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

export default Signup;
