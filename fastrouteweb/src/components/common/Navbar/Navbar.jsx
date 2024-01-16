import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5">
      <div className="col-md-3 mb-2 mb-md-0">
        <img src = "logo2 2.png" alt = "fastRoute logo"></img>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
          <Link to="/" className="nav-item px-3">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item px-3">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav-item px-3">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/why-choose-us" className="nav-item px-3">
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item px-3">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end">
    <Link to="/signin">
      <button className="login">Login</button>
    </Link>
  </div>

    </header>
    );
}

export default Navbar;