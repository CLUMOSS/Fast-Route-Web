import logo from './logo.svg';
import './App.css';

// import SignUp from './pages/signup/signup';
 import Navbar from './components/common/Navbar/Navbar';
 //import ContactUs from './pages/ContactUs';
// import Footer from './components/common/Footer/footer';
import Homepage from "./pages/home/homepage";  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/about/aboutpage'
import Career from './pages/careers/career'
import WhyChooseUsSection from './pages/home/choose-us'
import ContactUs from './pages/ContactUs'
import AppRoutes from './routes'; // Import your routes

// import Point from './pages/pointpickup/point';
// import Breakdown from './pages/breakdown/breakdown';
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
export default App;
