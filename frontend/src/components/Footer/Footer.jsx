import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h1>oditha chamod</h1>
            </div>
            <p className="footer-description">
              I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Let's Connect</h4>
            <div className="contact-info">
              <p>Ready to bring your vision to life?</p>
              <a href="#contact" className="footer-cta-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <polyline points="168 128 216 176 168 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <polyline points="72 32 72 176 216 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  </svg>
                </span>
                odithachamod@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 oditha chamod. All rights reserved.</p>
          </div>
          <div className="footer-badge">
            <div className="badge-icon">
              <svg viewBox="0 0 512 512">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <span>Available for Work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;