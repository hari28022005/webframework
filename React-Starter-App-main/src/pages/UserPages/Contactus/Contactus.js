import React, { useState } from "react";
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We're here to help and answer any questions you might have.</p>
        </div>
        <div className="contact-content">
          <section className="contact-section">
            <h2>Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
          <section className="contact-section">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:support@staffschedulingapp.com">support@staffschedulingapp.com</a></p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Staff Scheduling Ave, Suite 100, Scheduling City, SS 12345</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
