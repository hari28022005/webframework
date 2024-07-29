import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Staff Scheduling App</h1>
        <p>Your one-stop solution for efficient and effective staff scheduling.</p>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Staff Scheduling App, our mission is to simplify and streamline
            the process of staff management. We provide tools that allow you to
            easily schedule shifts, track attendance, and manage your workforce
            with ease.
          </p>
        </section>
        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Easy shift scheduling</li>
            <li>Automated reminders</li>
            <li>Real-time attendance tracking</li>
            <li>Comprehensive reporting</li>
            <li>User-friendly interface</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            We understand that managing a team can be challenging. That's why
            we've created a platform that's not only powerful but also intuitive
            and easy to use. Whether you're a small business or a large
            organization, our app is designed to meet your needs and help you
            save time and resources.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need support? Feel free to reach out to our
            customer service team at <a href="mailto:support@staffschedulingapp.com">support@staffschedulingapp.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
