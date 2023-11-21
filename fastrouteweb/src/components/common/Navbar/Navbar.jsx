import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../styles/Navbar.css'


const Navbar = () => {
    return (
        <header className="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5">
      <div className="col-md-3 mb-2 mb-md-0">
        <img src = "logo2 2.png" alt = "fastRoute logo"></img>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-item px-3">Home</a></li>
        <li><a href="#" className="nav-item px-3">About Us</a></li>
        <li><a href="#" className="nav-item px-3">Careers</a></li>
        <li><a href="#" className="nav-item px-3">Why Choose Us</a></li>
        <li><a href="#" className="nav-item px-3">Contact Us</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button className="login">Login</button>
      </div>
    </header>
    );
}

export default Navbar;