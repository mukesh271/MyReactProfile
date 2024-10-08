import React from 'react';
import './Expertise.css';

const techLogos = [
  { src: 'path/to/logo1.png', alt: 'Logo 1' },
  { src: 'path/to/logo2.png', alt: 'Logo 2' },
  { src: 'path/to/logo3.png', alt: 'Logo 3' },
  { src: 'path/to/logo4.png', alt: 'Logo 4' },
  { src: 'path/to/logo5.png', alt: 'Logo 5' },
  { src: 'path/to/logo6.png', alt: 'Logo 6' },
];

const Expertise = () => {
  return (
    <div className="expertise-wrapper">
      <div className="expertise-container">
      <h2>Career History</h2>
        <div className="expertise-marquee">
          {techLogos.map((logo, index) => (
            <div className="expertise-card" key={index}>
              <img src={logo.src} alt={logo.alt} className="expertise-logo" />
            </div>
          ))}
          {techLogos.map((logo, index) => (
            <div className="expertise-card" key={`duplicate-${index}`}>
              <img src={logo.src} alt={logo.alt} className="expertise-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
