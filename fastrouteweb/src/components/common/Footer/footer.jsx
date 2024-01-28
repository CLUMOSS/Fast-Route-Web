import { Link } from "react-router-dom";
import styles from'./footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.column}>
        <img src="/logo2.png" alt="Website Logo" className={styles.logo} />
      </div>

      <div className={styles.column}>
        <div className={styles.location}>
          <img src="/LocationIcon.png" alt="Location Logo" className={styles.locationLogo} />
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt <br />utlabore et dolore magna aliqua. </p>
        </div>
        <br />
        <div className={styles.socialLinks}>
          <ul style={{ display: 'flex', justifyContent: 'center' }}>
            <li><a href="#"><img src="Instagram Icon.png" alt="Instagram" className={styles.socialLogo} /></a></li>
            <li><a href="#"><img src="Facebook Icon.png" alt="Facebook" className={styles.socialLogo}/></a></li>
            <li><a href="#"><img src="Vector.png" alt="Twitter" className={styles.socialLogo}/></a></li>
          </ul>
        </div>
      </div>

      <div className={styles.column}>
        <h3 style={{ fontWeight: 'bold' }}>Overview</h3>
        <ul className={styles.footerLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/why-choose-us">Why choose us?</Link></li>
          <li><Link to="/contact-page">Contact Us</Link></li>
        </ul>
      </div>

      <div className={styles.column2}>
        <h3 style={{ fontWeight: 'bold' }}>Services</h3>
        <ul className={styles.footerLinks}>
          <li><Link to="/load-booking">Online load booking</Link></li>
          <li><Link to="/lorry-booking">Lorry Booking</Link></li>
          <li><Link to="/cargo-insurance">Cargo insurance</Link></li>
          <li><Link to="/vehicle-insurance">Vehicle insurance</Link></li>
          <li><Link to="/point-pickup">Point-point pick up</Link></li>
        </ul>
      </div>

      <div className={styles.column2}>
      <h2 style={{ fontWeight: 'bold' }}>Services</h2>
        <ul className={styles.footerLinks}>
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
