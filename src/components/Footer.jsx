import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <p>&copy; 2024 CodeScanner. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
