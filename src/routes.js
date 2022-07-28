import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateProfilePage from './pages/CreateProfilePage';
import InputListingPage from './pages/InputListingPage';
import InputListingPage2 from './pages/InputListingPage2';
import Dashboard from './pages/Dashboard';
import Breadcrumbs from './components/Breadcrumbs';
import Payments from './pages/dashboard/payments';
import Login from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/forgotPassword';
import BookingDetails from './pages/BookingDetailsPage';
import MarketPlace from './pages/MarketPlace2';
import Availability10 from './pages/Availability1';
import LandingPage from './pages/LandingPage';

import LandingPage2 from './pages/LandingPage2';
export default function PoochRoutes() {
 






  return (
    <>
      <Routes>
        <Route path="/home" element={<LandingPage2 />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="sign-up" element={<Breadcrumbs />}>
          <Route path="signup" element={<Signup />} />
          <Route path="create-profile" element={<CreateProfilePage />} />
          <Route path="input-listing" element={<InputListingPage />} />
          <Route path="input-listing2" element={<InputListingPage2 />} />
          <Route path="availability1" element={<Availability10 />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="payments" element={<Payments />} />
        </Route>
        <Route path="bookingdetails" element={<BookingDetails />} />
        <Route path="marketplace" element={<MarketPlace />} />
      </Routes>
    </>
  );
}
