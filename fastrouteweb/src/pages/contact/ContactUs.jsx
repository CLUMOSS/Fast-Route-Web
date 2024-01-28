import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ContactUs.css';
import Footer from '../../components/common/Footer/footer';

const ContactUs = () => {
  return (
    <div>
      <div className="contact">
        <div className="main my-5 mx-5 px-5">
          <h1 className="heading px-3">Contact Us</h1>
          <h2 className="main-text mx-4 my-4 col-lg-6 col-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eiusmod labore et magna aliqua.
          </h2>
          <div className="info my-2 py-5">
            <div className="i px-2">
              <img src="./Phone Icon.png" alt="phone" />
              <div>
                <p className = "info-text">+91 87660 457XXX<br /> +91 98765 423XXX</p>
              </div>
            </div>
            <div className="i mx-5 px-2">
              <img src="./Location Icon.png" alt="location" />
              <div>
                <strong>FastRoute Company</strong>
                <br />
                <p className = "info-text">811 Indian Summer Rd.<br />Sun City, AZ 85351</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="follow my-5 py-5">
        <div className="col-12 col-md-3 fleft">
          <h2 className="mx-5 follow-text">Follow Us</h2>
          <div className='handles mx-5 py-2'>
            <div className='handle my-3 mx-5 px-4 py-3'>
              <img src="./Instagram Icon.png" alt="Instagram" /><span className="handletext mx-3">Instagram</span>
            </div>
            <div className='handle my-3 mx-5 px-4 py-3'>
              <img src="./Facebook Icon.png" alt="Facebook" /><span className="handletext mx-3">Facebook</span>
            </div>
            <div className='handle my-2 mx-5 px-4 py-3'>
              <img src="./Vector.png" alt="Twitter" /><span className="handletext mx-3">Twitter</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9 my-4 fleft">
          <p className="basic mx-3"><span className="bar">|</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3 className='knowMore mx-3'>To know About Us</h3>
          <button className="about mx-3"><div className='aboutText'>About Us</div></button>
        </div>
      </div>

      <div className="enquiry row flex mb-5">
       <div className = "leftEnquiry col-lg-2 col-sm-12 py-5 px-5">
            <h1 className = "enquiry-text">For Enquiry</h1>
            <div className = "mx-5">
              <input type = "text" className = " inputFields p-2 mx-5 my-2" placeholder='Name'/><br/>
              <input type = "email" className = " inputFields p-2 mx-5 my-2" placeholder = "Email Id"/><br/>
              <input type = "text" className = " inputFields p-2 mx-5 my-2" placeholder = "Phone Number"/><br/>
              <textarea rows= "50" placeholder = "Comments" className = " inputFields p-2 mx-5 my-2"/><br/>
              <button className = "enquiry-button mx-5"><span className = "enquiry-button-text">Enquire</span></button>
            </div>
       </div>
       <div className='col-4'>
        </div>
       <div className='col-4 mt-5'>
        <div className = "request-text border-bottom">Request for Services</div>
        <p className = "request mt-3">Let us know your areas of interest so that we can serve you better</p>
        <img src = "design.png" className = "design"/>
       </div>
       <div className = "col-lg-2"></div>
      </div>
    </div>
  );
}

export default ContactUs;
