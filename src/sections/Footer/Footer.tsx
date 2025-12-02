import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>Bionic</span>
              <span className="highlight">AIM</span>
            </Link>
            <p>Enhancing today's mobility</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/stairlifts">Stairlifts</Link>
            <Link to="/elevators">Elevators</Link>
            <Link to="/service-plans">Service Plans</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BionicAIM LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
