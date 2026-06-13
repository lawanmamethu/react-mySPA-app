import React, { useState } from 'react';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-container contact-page">
      {/* Header */}
      <div className="page-header">
        <h1>Get in <span className="gradient-text">Touch</span></h1>
        <p>We'd love to hear from you. Let's start a conversation!</p>
      </div>

      {/* Contact Grid */}
      <div className="contact-grid">
        {/* Left side - Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Aethel Tech</p>
            <p>Innovation Hub, Level 5</p>
            <p>Colombo 3, Sri Lanka</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <p>hello@aethel.tech</p>
            <p>support@aethel.tech</p>
            <p>careers@aethel.tech</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p>+94 77 123 4567</p>
            <p>+94 11 234 5678</p>
            <p>Mon-Fri, 9:00 AM - 6:00 PM</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🌐</div>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#">LinkedIn</a> | <a href="#">Twitter</a> | <a href="#">GitHub</a> | <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <div className="form-group">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="hello@example.com"
            />
          </div>

          <div className="form-group">
            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project inquiry / Partnership / Support"
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell us about your project, idea, or question..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message ✨
          </button>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! We'll get back to you within 24 hours.
            </div>
          )}
        </form>
      </div>

      {/* Map / Location */}
      <div className="map-section">
        <h3>Find Us Here</h3>
        <div className="map-placeholder">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9450000000005!2d79.8565!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259d4e6f7e8d%3A0x9f8e5c5e8d5e5c5!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="250" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen="" 
            loading="lazy"
            title="Aethel Tech Location"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>❓ What services do you offer?</h4>
            <p>Web development, mobile apps, AI/ML solutions, cloud services, and digital marketing.</p>
          </div>
          <div className="faq-item">
            <h4>❓ How long does a project take?</h4>
            <p>Timeline varies based on complexity. Small projects: 2-4 weeks, Large projects: 2-3 months.</p>
          </div>
          <div className="faq-item">
            <h4>❓ Do you provide post-launch support?</h4>
            <p>Yes! We offer 24/7 support and maintenance packages for all our clients.</p>
          </div>
          <div className="faq-item">
            <h4>❓ Can I hire individual developers?</h4>
            <p>Absolutely! We offer dedicated developer hiring on monthly/ hourly basis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;