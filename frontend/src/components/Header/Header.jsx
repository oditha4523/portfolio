import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header" id="masthead">
      {/* Desktop Header */}
      <div id="ast-desktop-header" className="desktop-header">
        <div className="ast-main-header-wrap">
          <div className="ast-primary-header-bar main-header-bar">
            <div className="site-primary-header-wrap ast-container">
              <div className="ast-builder-grid-row">
                {/* Logo Section */}
                <div className="site-header-primary-section-left">
                  <div className="site-branding">
                    <span className="site-logo-text">
                      <a href="#" className="custom-logo-link">
                        <span className="logo-text">Oditha Chamod</span>
                      </a>
                    </span>
                  </div>
                </div>

                {/* Navigation and Button Section */}
                <div className="site-header-primary-section-right">
                  {/* Desktop Navigation */}
                  <div className="ast-builder-menu-1">
                    <nav className="site-navigation">
                      <ul className="main-header-menu">
                        <li className="menu-item current-menu-item">
                          <a href="#" className="menu-link">Home</a>
                        </li>
                        <li className="menu-item">
                          <a href="#about" className="menu-link">About</a>
                        </li>
                        <li className="menu-item">
                          <a href="#projects" className="menu-link">Projects</a>
                        </li>
                        <li className="menu-item">
                          <a href="#services" className="menu-link">Services</a>
                        </li>
                        <li className="menu-item">
                          <a href="#contact" className="menu-link">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* Contact Button */}
                  <div className="ast-header-button-1">
                    <div className="ast-builder-button-wrap">
                      <a className="ast-custom-button-link" href="#contact">
                        <div className="ast-custom-button">Contact Me</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div id="ast-mobile-header" className="ast-mobile-header-wrap">
        <div className="ast-main-header-wrap">
          <div className="ast-primary-header-bar main-header-bar">
            <div className="ast-builder-grid-row">
              {/* Mobile Logo */}
              <div className="site-header-primary-section-left">
                <div className="site-branding">
                  <span className="site-logo-text">
                    <a href="#" className="custom-logo-link">
                      <span className="logo-text">Oditha Chamod</span>
                    </a>
                  </span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="site-header-primary-section-right">
                <div className="ast-button-wrap">
                  <button 
                    type="button" 
                    className="menu-toggle main-header-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                  >
                    <span className="screen-reader-text">Main Menu</span>
                    <span className="mobile-menu-toggle-icon">
                      <svg className="ast-mobile-svg ast-menu-svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`ast-mobile-header-content ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="ast-builder-menu-mobile">
            <nav className="site-navigation">
              <ul className="main-header-menu">
                <li className="menu-item current-menu-item">
                  <a href="#" className="menu-link" onClick={toggleMobileMenu}>Home</a>
                </li>
                <li className="menu-item">
                  <a href="#about" className="menu-link" onClick={toggleMobileMenu}>About</a>
                </li>
                <li className="menu-item">
                  <a href="#projects" className="menu-link" onClick={toggleMobileMenu}>Projects</a>
                </li>
                <li className="menu-item">
                  <a href="#services" className="menu-link" onClick={toggleMobileMenu}>Services</a>
                </li>
                <li className="menu-item">
                  <a href="#contact" className="menu-link" onClick={toggleMobileMenu}>Contact</a>
                </li>
              </ul>
            </nav>
            <div className="ast-header-button-1">
              <div className="ast-builder-button-wrap">
                <a className="ast-custom-button-link" href="#contact" onClick={toggleMobileMenu}>
                  <div className="ast-custom-button">Contact Me</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;