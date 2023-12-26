import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Flosmart</h3>
          <p>Your trusted partner for innovative solutions in oil and gas.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧: info@flosmart.com</p>
          <p>☏: +234(0)84556523</p>
          <p>☏: +234(0)7010288155</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://web.facebook.com/flosmartEnergy" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/flosmart_ltd" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/flosmartenergyserviceslimited/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/flosmart-energy-services-ltd-24792b260?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXxeDLCoeQ%2BK%2BYjisF%2F9jAA%3D%3D" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} floSmart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;