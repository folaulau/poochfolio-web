import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

import GroomerApi from "../api/GroomerApi";
import FirebaseApi from "../api/FirebaseApi";
import { Button } from 'react-bootstrap';
import googleSvg from "../assessts/images/Google.svg"
import styled from 'styled-components';

import {

  Museosansrounded500NormalGraniteGra,

} from '../styledMixins';

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
      <div
        className="min-h-full flex flex-col justify-center   font-Museo-Sans-Rounded-900"
        style={{
          borderWidth: 3,
          borderColor: 'transparent',
          // borderTopLeftRadius: '30px',
          // borderTopRightRadius: '30px',
          // marginTop: -25,
          backgroundColor: '#F3F8FF',
        }}
      >
        <div
          style={{
            height: 5,
            backgroundColor: 'white',
            marginTop: -240,
            width: '100%',
            marginBottom: 5,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            width:'550px',
            alignSelf:'center',
            marginBottom:50
          }}
        >
          <Button
            onClick={() => facebookLogin()}
            style={{
              width: '260px',
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
              width: '260px',
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
    
        </div>
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}

          <p style={{ fontSize: '12px', textAlign: 'center', color: '#666666' }}>or continue with </p>
        
        </div>
        <div className="mt-2 " style={{ justifyContent: 'center', display: 'flex' }}>
          <div className=" py-8 px-4   sm:px-10">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  style={{ fontSize: '12px', color: '#666666', lineHeight: 3, marginLeft: 8 }}
                >
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
                    style={{
                      width: '542px',
                      height: '56px',
                      borderWidth: 2,
                      borderColor: '#85D8E7',
                      borderRadius: 28,
                      marginBottom: 20,
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  style={{ fontSize: '12px', color: '#666666', lineHeight: 3, marginLeft: 8 }}
                >
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
                    style={{
                      width: '542px',
                      height: '56px',
                      borderWidth: 2,
                      borderColor: '#85D8E7',
                      borderRadius: 28,
                      marginBottom: 20,
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  style={{ fontSize: '12px', color: '#666666', lineHeight: 3, marginLeft: 8 }}
                >
                  Confirm Password
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
                    style={{
                      width: '542px',
                      height: '56px',
                      borderWidth: 2,
                      borderColor: '#85D8E7',
                      borderRadius: 28,
                      marginBottom: 20,
                    }}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md    bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997]"
                  style={{
                    width: '542px',
                    height: '56px',
                    borderWidth: 2,
                    alignText: 'center',
                    alignItems: 'center',
                    borderRadius: 28,
                    fontSize: 15,
                    color: 'white',
                  }}
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
