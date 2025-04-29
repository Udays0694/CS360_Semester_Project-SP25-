import React from 'react';
import '../styles/global.css';  // Correct path from components to styles folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2025 Barter Database. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          <a href="/contact-us" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
