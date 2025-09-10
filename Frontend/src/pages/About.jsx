import React from 'react';
import '../CSS/pageCSS/About.css';
import photo from '../assets/OwnerPhoto.jpeg'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Festiva</h1>
        <p>Your partner in creating memorable celebrations</p>
      </div>
      
      <div className="about-content">
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Festiva was founded with a passion for bringing people together and making every event extraordinary. From small gatherings to large celebrations, we help turn ideas into beautifully executed experiences that leave lasting impressions.
          </p>
          <p>
            Over the years, we've partnered with thousands of organizers, venues, and vendors, providing the tools, inspiration, and support needed to plan seamless events that reflect each client’s personal style and values.
          </p>
        </div>
        
        <div className="about-mission">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We aim to empower individuals and organizations by offering smart event planning solutions, expert guidance, and a marketplace of trusted resources. Our mission is to make event planning effortless, creative, and accessible for everyone.
            </p>
          </div>
          <div className="mission-image">
            <div className="placeholder-image">
              <img src="https://images.unsplash.com/photo-1651313947982-59d4049e5834?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
        
        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎉</div>
              <h3>Memorable Moments</h3>
              <p>We design experiences that create joyful and lasting memories for you and your guests.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We leverage the latest tools and technology to enhance creativity and streamline planning.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We collaborate closely with clients and vendors to ensure every event is a success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Responsibility</h3>
              <p>We are committed to promoting sustainable and eco-friendly celebration practices.</p>
            </div>
          </div>
        </div>
        
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team of event experts, creative designers, and tech specialists work together to provide you with everything you need to make your celebration flawless and unforgettable.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src={photo} alt="" />
              </div>
              <h3>Saikat Bera</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
        
        <div className="about-cta">
          <h2>Let's Celebrate Together</h2>
          <p>Whether it’s a wedding, birthday, or corporate event, we’re here to help you plan something truly special.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
