import { useState } from "react";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignupEmailPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setUserInfo({
      email: "",
      password: "",
    });
    e.preventDefault();

    const firebaseConfig = {
      apiKey: "AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk",
      authDomain: "dev-pooch-technologies-inc.firebaseapp.com",
      projectId: "dev-pooch-technologies-inc",
      storageBucket: "dev-pooch-technologies-inc.appspot.com",
      messagingSenderId: "783774460598",
      appId: "1:783774460598:web:b2cea9f39f0ccba48f9417",
      measurementId: "G-CD147SVBFD",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const email = userInfo.email;
    const password = userInfo.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userCredential", userCredential);

        fetch("https://dev-api.poochapp.net/v1/groomers/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "k8sdfe4k",
          },
          body: JSON.stringify({
            token: user.accessToken,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("poochToken", data.token);
            localStorage.setItem("uuid", data.uuid);
            navigate("/create-profile");
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
    <form
      className="w-4/12 py-8 items-center justify-center mx-auto"
      onSubmit={handleSubmit}
    >
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
            placeholder="johnsmith@example.com"
            value={userInfo.email}
            onChange={handleInputChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#077997] focus:border-[#077997] sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#077997] focus:border-[#077997] sm:text-sm"
            placeholder="********"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997]"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
