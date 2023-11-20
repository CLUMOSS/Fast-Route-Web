import React from "react";
import './footer.css';
const Footer = () => {
    return(
        
            <footer className="footer-container">
              <div className="column">
                {/* 1st Column - Logo */}
                <img src="/logo2 2.png" alt="Website Logo" className="logo" />
              </div>
        
              <div className="column">
                {/* 4th Column - Location */}
                <div className="location">
                  <img src="/location Icon.png" alt="Location Logo" className="location-log0" />
                  <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt <br/>utlabore et dolore magna aliqua. </p>
                </div>
                <br/>
                <div className="social-links">
                  <ul style={{display:'flex', justifyContent:'center'}}>
                  <li><img src="Instagram Icon.png" alt="Instagram" className="location-logo" /></li>
                  <li><img src="Facebook Icon.png" alt="Fcebook" className="location-logo" /></li>
                  <li><img src="Vector.png" alt="Twitter" className="location-logo" /></li>
                  </ul>
                </div>
              </div>

              <div className="column">
                {/* 2nd Column - Overview */}
                <h3 style={{fontWeight:'bold'}}>Overview</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Why choose us?</li>
                  <li>Contact Us</li>
                </ul>
              </div>
        
              <div className="column">
                {/* 3rd Column - Services */}
                <h3 style={{fontWeight:'bold'}}>Services</h3>
                <ul>
                  <li>Online load booking</li>
                  <li>Lorry Booking</li>
                  <li>Cargo insurance</li>
                  <li>Vehicle insurance</li>
                  <li>Point-point pick up</li>  
                </ul>
              </div>
              <div className="column2" style={{marginTop:'35px'}}>
                {/* 3rd Column - Services */}
                <ul>
                  <li>Drop of loads intercity</li>
                  <li>Breakdown assistance 24/7</li>
                  <li>Vehicle Washing points</li>
                  <li>Vehicle Resting points</li>
                  <li>Vehicle Service points</li>  
                </ul>
              </div>
        
             
            </footer>
    )
}

export default Footer;