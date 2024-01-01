import React from 'react';
import ContactForm from '../sections/components/ContactForm';
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const ContactPage = () => {
  return (
    <div className="contact-page">
        <nav className="navbar-div">
          <Navbar />
        </nav>
      <div className="contact-cover">
        <img src="/images/port-harcourt.jpeg" alt="City Cover" />
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p className="contact-page-para">
            We'd love to hear from you. Reach out to us for any inquiries or to
            simply say hello.
          </p>

          <div className="address">
            <p>
              <strong>Visit Us:</strong> Plot 88 Rivoc Road, Trans Amadi Port Harcourt, Rivers.
            </p>
          </div>

          <div className="phone">
            <p>
              <strong>Call Us:</strong> +234(0)84556523, +234(0)7010288155
            </p>
          </div>

          <div className="email">
            <p>
              <strong>Email Us:</strong> info@flosmart.com
            </p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7271658512286!2d7.032052813897295!3d4.816840441982885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdb35da36af1%3A0x58338b67607609e1!2s88%20Rivoc%20St%2C%20Trans%20Amadi%20500102%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1672405118468!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ContactForm />
      <div className="footer-div">
          <Footer />
      </div>
    </div>
  );
};

export default ContactPage;