// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Plant</span>:B</h1>
          <p>
            Plant:B와 함께 등산의 즐거움을 누려봐요!
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: lms4882@gmail.com</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <button className="social-icon"><i className="fab fa-facebook-f"></i></button>
            <button className="social-icon"><i className="fab fa-twitter"></i></button>
            <button className="social-icon"><i className="fab fa-instagram"></i></button>
            <button className="social-icon"><i className="fab fa-linkedin-in"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Plant:B | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
