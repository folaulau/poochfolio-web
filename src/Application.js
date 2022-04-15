import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignupEmailPage from './pages/SignupEmailPage';

export default function Application() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='signup-email-page' element={<SignupEmailPage />} />
        </Routes>
    </BrowserRouter>
  )
}
