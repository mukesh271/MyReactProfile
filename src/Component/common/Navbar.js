import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">React<span>Mode</span> {'/>'}</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#contact" className="navbar-button">Book a call →</a></li>
      </ul>
    </nav>
    );
};
export default Navbar;