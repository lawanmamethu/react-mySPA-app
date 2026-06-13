import React, { useState } from 'react';
import './Pages.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Welcome to Aethel Tech
        </div>
        <h1 className="hero-title">
          Building the <span className="gradient-text">Future</span>
          <br />of Web Experiences
        </h1>
        <p className="hero-subtitle">
          We create fast, modern, and scalable web applications
          using cutting-edge technologies like React, Node.js, and AI/ML.
        </p>
        <button className="cta-button" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
          Explore Our Work →
        </button>
      </div>

      {/* Stats Section */}
      <div className="stats-section" id="features">
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">30+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4.9</div>
          <div className="stat-label">Client Rating</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </div>

      {/* Interactive Counter */}
      <div className="counter-section">
        <h3>⚡ Interactive Demo</h3>
        <div className="counter-card">
          <div className="counter-value">{count}</div>
          <div className="counter-buttons">
            <button onClick={() => setCount(count + 1)} className="counter-btn inc">+ Increase</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className="counter-btn dec">- Decrease</button>
            <button onClick={() => setCount(0)} className="counter-btn reset">⟳ Reset</button>
          </div>
          <p className="counter-note">Click buttons to see React state in action!</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Blazing Fast</h3>
          <p>Optimized performance with latest web standards and lazy loading</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Fully Responsive</h3>
          <p>Seamless experience on desktop, tablet, and mobile devices</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure by Default</h3>
          <p>Enterprise-grade security with best coding practices</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Global Reach</h3>
          <p>Serving clients worldwide with scalable solutions</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Integration</h3>
          <p>Smart automation and machine learning solutions</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Modern UI/UX</h3>
          <p>Beautiful, intuitive interfaces that users love</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Aethel Tech transformed our business with their amazing web solution. Highly recommended!"</p>
            <h4>- Sarah Johnson</h4>
            <span>CEO, TechStart</span>
          </div>
          <div className="testimonial-card">
            <p>"Professional, fast, and reliable. The team delivered beyond our expectations."</p>
            <h4>- Michael Chen</h4>
            <span>CTO, InnovateLabs</span>
          </div>
          <div className="testimonial-card">
            <p>"Outstanding work! Our new website increased conversions by 40%."</p>
            <h4>- Priya Sharma</h4>
            <span>Marketing Director</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;