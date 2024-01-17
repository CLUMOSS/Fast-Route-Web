// src/pages/SignUp.jsx
import React from 'react';
import './styles.css'; // Import your local styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container custom-container" style={{ backgroundColor: 'white', width:'100%' }}>

      {/* The rest of your code */}
      <form>
              {/* Google Sign Up Button */}
              <div className="d-flex justify-content-center mt-4" style={{paddingTop:'10px'}}>
          <button
            type="button"
            className="custom-google-button"
            style={{width:'100%'}}
          >

            <img
              src="/google-logo.png" // Use the public URL to reference the logo
              alt="Google Logo"
              className="google-logo"
            />
          <p
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: '',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              position:'relative',
              top:'7px'
            }}
          >Sign Up with Google
          </p>
          </button>
        </div>

        {/* First Row */}
                {/* Line and "or" text */}
        <div className="d-flex align-items-center mb-3" style={{justifyContent:'center'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="6"
            fill="none"
            style={{width:'253px', marginRight: '10px' }}
          >
            <path d="M247.333 3C247.333 4.47276 248.527 5.66667 250 5.66667C251.473 5.66667 252.667 4.47276 252.667 3C252.667 1.52724 251.473 0.333333 250 0.333333C248.527 0.333333 247.333 1.52724 247.333 3ZM0 3.5H250V2.5H0V3.5Z" fill="#D0B5B5" />
          </svg>
          <span className="mx-2" style={{color:'black'}}>or</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="6"
            fill="none"
            style={{width:'253px', marginLeft: '10px' }}
          >
            <path d="M247.333 3C247.333 4.47276 248.527 5.66667 250 5.66667C251.473 5.66667 252.667 4.47276 252.667 3C252.667 1.52724 251.473 0.333333 250 0.333333C248.527 0.333333 247.333 1.52724 247.333 3ZM0 3.5H250V2.5H0V3.5Z" fill="#D0B5B5" />
          </svg>
        </div>


        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="input-heading">First Name</label>
            <input type="text" className="form-control input-box" style={{ background: 'rgba(237, 227, 227, 0.74)' }} id="firstName" placeholder="Enter Your First Name" />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="input-heading">Last Name</label>
            <input type="text" className="form-control input-box" style={{ background: 'rgba(237, 227, 227, 0.74)' }}id="lastName" placeholder="Enter Your Last Name" />
          </div>
        </div>

        {/* Second Row */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="dob" className="input-heading">Date of Birth</label>
            <input type="date" className="form-control input-box" style={{ background: 'rgba(237, 227, 227, 0.74)' }} placeholder="Enter Your DOB" />
          </div>
          <div className="col">
            <label htmlFor="email" className="input-heading">Email Address</label>
            <input type="email" className="form-control input-box" style={{ background: 'rgba(237, 227, 227, 0.74)' }} id="email" placeholder="Enter Your Email" />
          </div>
        </div>

        {/* Third Row */}
                <div className="row mb-3">
          <div className="col">
            <label htmlFor="password" className="input-heading">Password</label>
            <div className="password-input">
              <input type="password" className="form-control input-box" style={{ background: 'rgba(237, 227, 227, 0.74)' }} id="password" placeholder="Create a strong password" />
              <div className="hide-icon">
                {/* SVG code for the hide icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                  <path d="M20.3731 1.5519C20.1668 1.35506 19.8871 1.24448 19.5954 1.24448C19.3037 1.24448 19.024 1.35506 18.8177 1.5519L1.628 17.9624C1.52294 18.0592 1.43914 18.1751 1.38149 18.3032C1.32384 18.4313 1.29349 18.5691 1.29222 18.7085C1.29096 18.8479 1.31879 18.9862 1.3741 19.1152C1.42941 19.2442 1.51108 19.3615 1.61437 19.4601C1.71765 19.5587 1.84046 19.6366 1.97565 19.6894C2.11084 19.7422 2.25568 19.7688 2.40174 19.7676C2.5478 19.7664 2.69214 19.7374 2.82634 19.6824C2.96055 19.6273 3.08193 19.5473 3.1834 19.4471L20.372 3.0366C20.5782 2.8397 20.6941 2.57267 20.6941 2.29425C20.6941 2.01583 20.5793 1.74881 20.3731 1.5519ZM3.4188 14.1729L6.2348 11.4849C6.15451 11.1621 6.11281 10.8317 6.1105 10.5C6.1105 8.00205 8.2995 5.97555 11 5.97555C11.3146 5.97555 11.6204 6.00915 11.9185 6.06165L13.2418 4.79955C12.5008 4.68237 11.7511 4.62268 11 4.62105C3.784 4.62 0 9.69255 0 10.5C0 10.9442 1.1627 12.6956 3.4188 14.1729ZM18.5845 6.83025L15.7663 9.51825C15.8422 9.83535 15.8884 10.1619 15.8884 10.5C15.8884 12.998 13.7005 15.0224 11 15.0224C10.6876 15.0224 10.384 14.9888 10.0881 14.9373L8.7637 16.2005C9.4699 16.3097 10.21 13 16.379 11 16.379C18.216 16.379 22 11.3043 22 10.5C22 10.0548 20.8384 8.3055 18.5845 6.83025Z" fill="#724E31"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Button Row */}
        <div className="row">
          <div className="col">
          <button
            type="button"
            className="custom-button btn btn-primary btn-lg"
            style={{
              color: '#FFF',
              fontFamily: '',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              backgroundColor:'rgba(114, 78, 49, 0.74)',
              width:'100%'
            }}
          >
            Start Your Free Trial!
          </button>

          </div>
        </div>
                {/* Terms of Service and Privacy Policy */}
        <div className="d-flex flex-column align-items-center mt-4" style={{ width: '437px', height: '28px', flexShrink: '0' }}>
          <p
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '10px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              position:'relative',
              right:'66px'
            }}
          >
            By creating an account, you agree to the{' '}
            <span style={{ color: '#724E31', textDecorationLine: 'underline' }}>Terms of Service</span> &{' '}
            <span style={{ color: '#724E31', textDecorationLine: 'underline' }}>Privacy Policy</span>
          </p>
        </div>
                {/* Separator SVG */}
        <div className="d-flex justify-content-center mt-2" style={{ width: '611px', height: '0px', flexShrink: '0' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="617" height="6" viewBox="0 0 617 6" fill="none">
            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM611.333 3C611.333 4.47276 612.527 5.66667 614 5.66667C615.473 5.66667 616.667 4.47276 616.667 3C616.667 1.52724 615.473 0.333333 614 0.333333C612.527 0.333333 611.333 1.52724 611.333 3ZM3 3.5H614V2.5H3V3.5Z" fill="#D0B5B5" />
          </svg>
        </div>
        {/* Already a customer? & Sign in */}
        <div className="d-flex justify-content-center mt-2" style={{ width: '100%', flexShrink: '0' }}>
          <p
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              marginBottom: '5px',
              marginRight: '10px',
            }}
          >
            Already a customer?
          </p>
          <p style={{
  color: '#724E31',
  fontFamily: 'Inter',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: 'normal',
}}>
  <Link to="/signin" style={{ color: '#724E31', textDecoration: 'none' }}>
    <span className="signin-link">Sign in</span>
  </Link>
</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
