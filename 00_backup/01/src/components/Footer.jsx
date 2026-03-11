import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-logo">
            Park<span className="logo-dot">.</span>
          </p>
          <p className="footer-text">
            디자인과 구현을 함께 이해하는 크리에이터.
          </p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Park Soon Chan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
