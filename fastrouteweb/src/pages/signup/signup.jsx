// components/SignUp.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <div className="container custom-container">
      <h2>Sign Up</h2>
      <form>
        {/* First Row */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
        </div>

        {/* Second Row */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" />
          </div>
          <div className="col">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
        </div>

        {/* Third Row */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
        </div>

        {/* Button Row */}
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary btn-lg">Start Your Free Trial</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
