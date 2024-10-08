import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`landing-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="landing-content">
        <h1>
          <span className="highlight">I develop fullstack</span> solutions that delight
          and inspire users.
        </h1>
        <p>
          Hi! I'm Mukesh choudhary, a Fullstack Web Developer based in India. I create
          user-friendly interfaces for fast-growing startups.
        </p>
        <div className="landing-buttons">
          <a href="#contact" className="btn btn-primary">Book a call</a>
          <a href="#cv" className="btn btn-secondary">Download CV →</a>
        </div>
      </div>
      <div className="landing-image">
        <img src="your-image-url.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default LandingPage;
