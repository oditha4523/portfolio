import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero-section elementor-element" data-id="420fa8b">
      <div className="e-con-inner">
        {/* Left Content */}
        <div className="hero-left-content">
          {/* Available for Work Badge */}
          <div className="hero-badge elementor-element elementor-widget-icon-box">
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon">
                    <svg 
                      aria-hidden="true" 
                      className="e-font-icon-svg e-fas-circle" 
                      viewBox="0 0 512 512" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span>Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="hero-heading elementor-element elementor-widget-heading">
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">
                Oditha<br />Chamod
              </h1>
            </div>
          </div>

          {/* Content Container */}
          <div className="hero-content e-con-full e-flex e-con e-child">
            {/* Description Text */}
            <div className="hero-description elementor-element elementor-widget-text-editor elementor-hidden-mobile">
              <div className="elementor-widget-container">
                <p>
                  I craft seamless digital experiences by combining intuitive design with robust, scalable technology building applications that not only look great but also perform flawlessly.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hero-button elementor-element elementor-widget-button elementor-hidden-mobile">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a 
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" 
                    href="#contact"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none"></rect>
                          <polyline 
                            points="168 128 216 176 168 224" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                          ></polyline>
                          <polyline 
                            points="72 32 72 176 216 176" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="16"
                          ></polyline>
                        </svg>
                      </span>
                      <span className="elementor-button-text">Full-stack Developer</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        
      </div>
    </section>
  );
};

export default Hero;