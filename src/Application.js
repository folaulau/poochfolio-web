import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignupEmailPage from './pages/SignupEmailPage';
import CreateProfilePage from './pages/CreateProfilePage';
import InputListingPage from './pages/InputListingPage';

export default function Application() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='signup-email-page' element={<SignupEmailPage />} />
            <Route path='create-profile' element={<CreateProfilePage />} />
            <Route path='input-listing' element={<InputListingPage />} />
        </Routes>
    </BrowserRouter>
  )
}
