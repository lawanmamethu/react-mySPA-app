import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page-container about-page">
      {/* Header */}
      <div className="page-header">
        <h1>About <span className="gradient-text">Aethel Tech</span></h1>
        <p>Who we are, what we do, and why we love it</p>
      </div>

      {/* Mission & Vision */}
      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>To empower businesses with innovative, scalable, and reliable technology solutions that drive growth and transform ideas into reality.</p>
        </div>
        <div className="about-card">
          <div className="about-icon">👁️</div>
          <h2>Our Vision</h2>
          <p>To become a global leader in digital transformation, delivering cutting-edge AI/ML, web, and mobile solutions that shape tomorrow.</p>
        </div>
        <div className="about-card">
          <div className="about-icon">💎</div>
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>💡 Innovation First</li>
            <li>🤝 Client-Centric Approach</li>
            <li>⚡ Excellence in Execution</li>
            <li>🌍 Global Mindset</li>
            <li>🔓 Transparency & Trust</li>
          </ul>
        </div>
      </div>

      {/* Timeline / History */}
      <div className="timeline-section">
        <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Founded</h3>
              <p>Aethel Tech started with a small team of passionate developers</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>First 10 Clients</h3>
              <p>Reached milestone of 10 successful projects across various industries</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Global Expansion</h3>
              <p>Expanded team and started serving international clients</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>AI/ML Specialization</h3>
              <p>Launched dedicated AI/ML division for advanced automation</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2026</div>
            <div className="timeline-content">
              <h3>50+ Projects</h3>
              <p>Celebrated 50+ successful deliveries with 100% client satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="section-title">Meet Our <span className="gradient-text">Leadership</span></h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👩‍💻</div>
            <h3>Dr. Amara Weerasinghe</h3>
            <p>CEO & Founder</p>
            <span>15+ years in tech innovation</span>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🔧</div>
            <h3>Dilshan Perera</h3>
            <p>CTO</p>
            <span>Expert in cloud architecture</span>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍🎨</div>
            <h3>Nimali Fernando</h3>
            <p>Lead Designer</p>
            <span>UI/UX specialist</span>
          </div>
          <div className="team-card">
            <div className="team-avatar">🧠</div>
            <h3>Rashmi Silva</h3>
            <p>AI/ML Lead</p>
            <span>PhD in Machine Learning</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-section">
        <h2 className="section-title">Technologies We <span className="gradient-text">Master</span></h2>
        <div className="tech-grid">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Django</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Tailwind CSS</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">PostgreSQL</span>
          <span className="tech-tag">AWS</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">TensorFlow</span>
          <span className="tech-tag">GraphQL</span>
        </div>
      </div>
    </div>
  );
}

export default About;