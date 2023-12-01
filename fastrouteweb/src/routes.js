// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/homepage';
import AboutUs from './pages/about/aboutpage';
import Career from './pages/careers/career';
import WhyChooseUsSection from './pages/WhyChooseUs';
import ContactUs from './pages/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/why-choose-us" element={<WhyChooseUsSection />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* Add more routes for other sections as needed */}
    </Routes>
  );
};

export default AppRoutes;
