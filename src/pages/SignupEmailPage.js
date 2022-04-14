import { useState } from "react";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupEmailPage() {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    setUserInfo({
      userName: '',
      email: ''
    })
    e.preventDefault();

    const firebaseConfig = {
      apiKey: "AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk",
      authDomain: "dev-pooch-technologies-inc.firebaseapp.com",
      projectId: "dev-pooch-technologies-inc",
      storageBucket: "dev-pooch-technologies-inc.appspot.com",
      messagingSenderId: "783774460598",
      appId: "1:783774460598:web:b2cea9f39f0ccba48f9417",
      measurementId: "G-CD147SVBFD"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const email = userInfo.email;
    const password = userInfo.userName;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('userCredential', userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <form onSubmit={handleSubmit} className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="userName" className="block text-xs font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Jane Doe"
          value={userInfo.userName}
          onChange={handleInputChange}
        />
      </div>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="email" className="block text-xs font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="you@example.com"
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </form>
  )
}
