import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="column">
        {/* 1st Column - Logo */}
        <img src="/logo2 2.png" alt="Website Logo" className="logo" />
      </div>

      <div className="column">
        {/* 4th Column - Location */}
        <div className="location">
          <img src="/location Icon.png" alt="Location Logo" className="location-logo" />
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt <br />utlabore et dolore magna aliqua. </p>
        </div>
        <br />
        <div className="social-links">
          <ul style={{ display: 'flex', justifyContent: 'center' }}>
            <li><img src="Instagram Icon.png" alt="Instagram" className="social-logo" /></li>
            <li><img src="Facebook Icon.png" alt="Facebook" className="social-logo" /></li>
            <li><img src="Vector.png" alt="Twitter" className="social-logo" /></li>
          </ul>
        </div>
      </div>

      <div className="column">
        {/* 2nd Column - Overview */}
        <h3 style={{ fontWeight: 'bold' }}>Overview</h3>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/why-choose-us">Why choose us?</Link></li>
          <li><Link to="/contact-page">Contact Us</Link></li>
        </ul>
      </div>

      <div className="column">
        {/* 3rd Column - Services */}
        <h3 style={{ fontWeight: 'bold' }}>Services</h3>
        <ul className="footer-links">
          <li><Link to="/load-booking">Online load booking</Link></li>
          <li><Link to="/lorry-booking">Lorry Booking</Link></li>
          <li><Link to="/cargo-insurance">Cargo insurance</Link></li>
          <li><Link to="/vehicle-insurance">Vehicle insurance</Link></li>
          <li><Link to="/point-pickup">Point-point pick up</Link></li>
        </ul>
      </div>

      <div className="column2" style={{ marginTop: '35px' }}>
        {/* Additional Services */}
        <ul className="footer-links">
          <li><Link to="/intercity-loads">Drop of loads intercity</Link></li>
          <li><Link to="/breakdown-assistance">Breakdown assistance 24/7</Link></li>
          <li><Link to="/washing-points">Vehicle Washing points</Link></li>
          <li><Link to="/resting-points">Vehicle Resting points</Link></li>
          <li><Link to="/service-points">Vehicle Service points</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
