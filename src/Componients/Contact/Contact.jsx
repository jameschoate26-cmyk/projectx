import React from "react";
import { Contact } from "./Contact.js";

const ContactUs = () => {
  return (
    <Contact>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions about Mars, SpaceX, or our mission? Send us a message.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </Contact>
  );
};

export default ContactUs;
