import { useState, useEffect } from "react";
// import React from 'react';
import { useNavigate } from "react-router-dom";
// import GroomerGraphql from "../graphql/GroomerGraphQL";
import FirebaseApi from "../api/FirebaseApi";
import GroomerApi from "../api/GroomerApi";
import { Button } from 'react-bootstrap';
import googleSvg from '../assessts/images/Google.svg';
import Header from "../components/Header";
const Signin = () => {

  const [groomerInfo, setGroomerInfo] = useState({
    email: "",
    password: "Test1234!",
  });

  let navigate = useNavigate();

  useEffect(() => {

    // const data = await startFetchGetGroomer(poochToken);
    // setProfileData(data);
    // loadProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const loadProfile = () =>{
  //   GroomerGraphql.getProfile()
  //   .then((response) => {
  //     console.log("Success:", response);
  //     let groomerInfo = response.data.data?.groomer[0];
  //     console.log("groomerInfo:", groomerInfo);

  //     goToNextDestination(groomerInfo.status, groomerInfo.signUpStatus);
  //   })
  //   .catch((error) => {
  //     console.log("Error", error);
  //   });
  // }

  // const goToNextDestination = (status,signUpStatus) => {
  //   console.log("goToNextDestination")
  //   console.log("status, ", status)
  //   console.log("signUpStatus, ", signUpStatus)
  //   if(status==="ACTIVE" || status==="PENDING_APPROVAL"){
  //     navigate("/dashboard");
  //   }else if(status==="SIGNING_UP"){
  //     switch (signUpStatus) {
  //       case "SIGNED_UP":
  //         navigate("/sign-up/create-profile");
  //         break;
  //       case "PROFILE_CREATED":
  //         navigate("/sign-up/input-listing2");
  //         break;
  //       case "LISTING_CREATED":
  //         navigate("/payment-method");
  //         break;
  //       default:
  //         navigate("/");
  //     }
  //   }else{
  //     // display message to user that he's either inactive or blocked
  //   }

    
  // }
const facebookLogin = () => {
  FirebaseApi.loginWithFacebook(navigate);
};
const googleLogin = () => {
  FirebaseApi.loginInWithGoogle(navigate);
};
  const handleInputChange = (e) => {
    setGroomerInfo({
      ...groomerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const signInWithEmail = () =>{
    console.log("signInWithEmail")
    console.log(groomerInfo)
    FirebaseApi.signInWithEmail(groomerInfo.email, groomerInfo.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("userCredential", userCredential);

      let authentication = {
        "token": user.accessToken,
        "rememberMe": true
      };

      GroomerApi.authenticate(authentication)
      .then((response) => {
          let auth = response.data;
          console.log("auth, ", auth);
          localStorage.setItem("poochToken", auth.token);
          localStorage.setItem("uuid", auth.uuid);
          navigate("/dashboard");
          // goToNextDestination(auth.status, auth.signUpStatus);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    })
    .catch((error) => {
      console.error("Error: ", error);
    });

  }

  return (
    <>
      <nav className="bg-pooch-blue-2 bg-center bg-cover bg-no-repeat">
        <Header />
      </nav>
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-Museo-Sans-Rounded-900 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign In
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
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={groomerInfo.email}
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
                    value={groomerInfo.password}
                    onChange={handleInputChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#077997] focus:border-[#077997] sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#077997] focus:ring-[#077997] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/forgotpassword"
                    // className="font-medium text-indigo-600 hover:text-indigo-500"
                    className="font-medium text-[#077997] hover:text-[#077997]"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  onClick={() => signInWithEmail()}
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997]"
                >
                  Sign in
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
    </>
  );
};

export default Signin;
