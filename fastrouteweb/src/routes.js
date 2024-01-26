// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/homepage';
import AboutUs from './pages/about/aboutpage';
import Career from './pages/careers/career';
import WhyChooseUsSection from './pages/WhyChooseUs';
import Contactpg from './pages/contact/contactpg';
import Washingpg from './pages/washingpts/washingpage';
import VEHICLE from './pages/vehicle-insurance/vehicle';
import SignPG from './pages/signup/signuppage';
import Resting from './pages/restingpoints/Resting';
import Pointpg from './pages/pointpickup/pointpage';
import LorryBooking from './pages/lorryBooking/LorryBooking';
import Load from './pages/load-booking/load';
import CargoInsurance from './pages/CargoInsurance/CargoInsurance';
import Breakpg from './pages/breakdown/breakdownpg';
import SignInPage from './pages/SignIn/SignInPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/why-choose-us" element={<WhyChooseUsSection />} />
      <Route path="/washing-points" element={<Washingpg />} />
      <Route path="/vehicle-insurance" element={<VEHICLE />} />
      <Route path="/signup" element={<SignPG />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/resting-points" element={<Resting />} />
      <Route path="/point-pickup" element={<Pointpg />} />
      <Route path="/lorry-booking" element={<LorryBooking />} />
      <Route path="/load-booking" element={<Load />} />
      <Route path="/cargo-insurance" element={<CargoInsurance />} />
      <Route path="/breakdown-assistance" element={<Breakpg />} />
      <Route path="/contact-page" element={<Contactpg />} />

      {/* Add more routes for other sections as needed */}
    </Routes>
  );
};

export default AppRoutes;
