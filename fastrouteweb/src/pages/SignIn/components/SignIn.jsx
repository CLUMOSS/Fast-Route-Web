import React from 'react';
import styles from '../styles/SignIn.module.css'; 
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.container}>
        <form>
        <div className={styles.containerHead}>
            <h1 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginBottom: '25px',
            }}>Welcome Back!</h1>
        </div>
        <div className={styles.google}>
            <button className={styles.googleLogin}>
              <img src="/google-logo.png"  alt="Google Logo" className={styles.googleLogo} />
              <p style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: '',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              position:'relative',
              top:'7px'
            }}>Continue With Google</p>
            </button>
        </div>

        <div className={styles.dividingLine}>
          <svg xmlns="http://www.w3.org/2000/svg" height="6" fill="none" style={{width:'253px', marginRight: '10px' }}>
            <path d="M247.333 3C247.333 4.47276 248.527 5.66667 250 5.66667C251.473 5.66667 252.667 4.47276 252.667 3C252.667 1.52724 251.473 0.333333 250 0.333333C248.527 0.333333 247.333 1.52724 247.333 3ZM0 3.5H250V2.5H0V3.5Z" fill="#D0B5B5" />
          </svg>

          <span className={styles.or} style={{color:'black'}}>or</span>

           <svg xmlns="http://www.w3.org/2000/svg" height="6" fill="none" style={{width:'253px', marginLeft: '10px' }} >
            <path d="M247.333 3C247.333 4.47276 248.527 5.66667 250 5.66667C251.473 5.66667 252.667 4.47276 252.667 3C252.667 1.52724 251.473 0.333333 250 0.333333C248.527 0.333333 247.333 1.52724 247.333 3ZM0 3.5H250V2.5H0V3.5Z" fill="#D0B5B5" />
           </svg>
        </div>

        <div className={styles.inputs}>
        <label htmlFor="email"  className={styles.inputHeading}>Email Address</label>
        <input type="email" id="email" className= {styles.inputBox} placeholder='Enter your Email' required/>

        </div>
        <div className={styles.inputs2}>
        <label htmlFor="password" className={styles.inputHeading}>Password</label>
        <input type="password" id="password"  className={styles.inputBox} placeholder='Enter your Password' required/>

        </div>
        
        <div className={styles.bttn}>
        <button type="submit" className={styles.customButton}>Sign in</button>
        </div>

      <div className={styles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 617 6" fill="none">
            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM611.333 3C611.333 4.47276 612.527 5.66667 614 5.66667C615.473 5.66667 616.667 4.47276 616.667 3C616.667 1.52724 615.473 0.333333 614 0.333333C612.527 0.333333 611.333 1.52724 611.333 3ZM3 3.5H614V2.5H3V3.5Z" fill="#D0B5B5" />
          </svg>
        </div>

        <div className={styles.createAcc}>
  <p className={styles.createAccount}>
    Don't have an account? <b>
      <Link to="/signup" style={{ color: '#724E31', textDecoration: 'none' }}>
        <span className={styles.createLink}>Create account</span>
      </Link>
    </b>
  </p>
</div>
        
        </form>
    </div>
  );
};

export default SignIn;
