import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Send Us a Message</h2>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;