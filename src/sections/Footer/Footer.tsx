import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>Bionic</span>
              <span className="highlight">AIM</span>
            </a>
            <p>Enhancing today's mobility</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Bionic AIM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
