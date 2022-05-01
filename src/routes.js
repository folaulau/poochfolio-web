import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import NewSignUpPage from "./pages/NewSignUpPage";
import SignupEmailPage from "./pages/SignupEmailPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import InputListingPage from "./pages/InputListingPage";
import InputListingPage2 from "./pages/InputListingPage2";
import Dashboard from "./pages/Dashboard";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/Home";

export default function PoochRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<Breadcrumbs />}>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="new-signup-page" element={<NewSignUpPage />} />
        <Route path="signup-email-page" element={<SignupEmailPage />} />
        <Route path="create-profile" element={<CreateProfilePage />} />
        <Route path="input-listing" element={<InputListingPage />} />
        <Route path="input-listing2" element={<InputListingPage2 />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
