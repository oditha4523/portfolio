import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project Name Here",
      year: "2023",
      image: "/images/Portfolio-Img-2.png"
    },
    {
      id: 2,
      title: "Project Name Here", 
      year: "2023",
      image: "/images/Project-Pic-1.png"
    },
    {
      id: 3,
      title: "Project Name Here",
      year: "2023", 
      image: "/images/Portfolio-Img-4.png"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "I dive deep into understanding your brand, goals, and target audience. Through detailed consultations and research, I gather essential insights that inform the entire design process."
    },
    {
      number: "2", 
      title: "Design",
      description: "I begin crafting visually compelling and strategic designs. This step focuses on translating ideas into tangible visual concepts that align with your brand."
    },
    {
      number: "3",
      title: "Development", 
      description: "I transform the visuals into a fully functional website. This phase involves meticulous coding and integration to ensure your site is responsive and performs seamlessly across devices."
    },
    {
      number: "4",
      title: "Launch",
      description: "I rigorously test the website to ensure everything functions flawlessly before going live. Post-launch, I provide support and guidance to help you maximize your new online presence."
    }
  ];

  const whyChooseFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M166,0H75C33.645,0,0,33.645,0,75v91c0,41.355,33.645,75,75,75h91c41.355,0,75-33.645,75-75V75C241,33.645,207.355,0,166,0z"></path>
          <path d="M437,271h-91c-41.355,0-75,33.645-75,75v91c0,41.355,33.645,75,75,75h91c41.355,0,75-33.645,75-75v-91C512,304.645,478.355,271,437,271z"></path>
          <path d="M437,0h-91c-41.355,0-75,33.645-75,75v91c0,57.897-47.103,105-105,105H75c-41.355,0-75,33.645-75,75v91c0,41.355,33.645,75,75,75h91c41.355,0,75-33.645,75-75v-91c0-57.897,47.103-105,105-105h91c41.355,0,75-33.645,75-75V75C512,33.645,478.355,0,437,0z"></path>
        </svg>
      ),
      title: "Tailored Design",
      description: "I believe that every brand is unique and deserves a website that is just as distinctive."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
          <path d="m68.265625 136.535156c-37.6875 0-68.265625-30.566406-68.265625-68.269531s30.578125-68.265625 68.265625-68.265625c37.699219 0 68.265625 30.566406 68.265625 68.265625s30.570312 68.269531 68.269531 68.269531 68.265625-30.566406 68.265625-68.265625 30.570313-68.269531 68.269532-68.269531c37.699218 0 68.265624 30.566406 68.265624 68.265625s-30.566406 68.265625-68.265624 68.265625c-113.121094 0-204.800782 91.71875-204.800782 204.796875 0 37.679687-30.566406 68.265625-68.265625 68.265625s-68.269531-30.558594-68.269531-68.257812c0-37.699219 30.566406-68.269532 68.265625-68.269532s68.257813-30.566406 68.257813-68.265625-30.554688-68.265625-68.257813-68.265625zm0 0"></path>
          <path d="m187.734375 298.664062c0-61.300781 49.65625-110.933593 110.9375-110.933593 61.28125.003906 110.929687 49.632812 110.929687 110.933593 0 61.273438-49.648437 110.9375-110.9375 110.9375-61.28125 0-110.929687-49.664062-110.929687-110.9375zm0 0"></path>
        </svg>
      ),
      title: "User-Centric Approach", 
      description: "With a strong focus on user experience, I design websites that are intuitive and easy to navigate."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
          <path d="m5.73 37.36c-.07.26-.04.53.1.76l5.05 8.75c.28.48.89.64 1.37.37l11.7-6.76v13.52c0 .55.45 1 1 1h10.11c.55 0 1-.45 1-1v-13.52l11.7 6.76c.23.13.51.17.76.1.26-.07.48-.24.61-.47l5.05-8.75c.28-.48.11-1.09-.36-1.36l-11.71-6.76 11.71-6.76c.22-.13.39-.35.46-.61.07-.25.03-.53-.1-.76l-5.05-8.75c-.28-.48-.89-.64-1.37-.36l-11.7 6.75v-13.51c0-.55-.45-1-1-1h-10.11c-.55 0-1 .45-1 1v13.51l-11.7-6.75c-.48-.28-1.09-.12-1.37.36l-5.05 8.75c-.14.23-.17.51-.1.76.07.26.23.48.46.61l11.71 6.76-11.71 6.76c-.23.13-.39.35-.46.6z"></path>
        </svg>
      ),
      title: "Trending Technologies",
      description: "I stay up-to-date with the latest web technologies and design trends to deliver modern solutions."
    }
  ];

  const services = [
    {
      title: "Web Design",
      description: "Creating visually stunning and user-friendly websites is at the heart of what I do.",
      features: ["Custom Tailored Design", "Responsive Layouts", "User Experience Focus"],
      icon: (
        <svg width="125" height="62" viewBox="0 0 125 62" fill="none">
          <path d="M62.5 31C62.5 48.0863 48.6488 61.9375 31.5625 61.9375C14.4762 61.9375 0.625 48.0863 0.625 31C0.625 13.9137 14.4762 0.0625 31.5625 0.0625C48.6488 0.0625 62.5 13.9137 62.5 31ZM62.5 61.9375C79.5863 61.9375 93.4375 48.0863 93.4375 31C93.4375 13.9137 79.5863 0.0625 62.5 0.0625V61.9375ZM93.4375 61.9375C110.524 61.9375 124.375 48.0863 124.375 31C124.375 13.9137 110.524 0.0625 93.4375 0.0625V61.9375Z" fill="url(#paint0_linear_50_250)"/>
          <defs>
            <linearGradient id="paint0_linear_50_250" x1="0.625" y1="31" x2="124.375" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A4FF50"/>
              <stop offset="1" stopColor="#E3FFC4"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Development", 
      description: "I bring your designs to life with clean, efficient, and high-performing code.",
      features: ["HTML, CSS, & JS Expertise", "Cross-Browser Compatibility", "Faster Load Times"],
      icon: (
        <svg width="63" height="62" viewBox="0 0 63 62" fill="none">
          <path d="M0.5 31C0.5 13.8788 14.3788 0 31.5 0C31.5 0 31.5 31 0.5 31ZM0.5 31C0.5 48.1212 14.3788 62 31.5 62C31.5 62 31.5 31 0.5 31ZM31.5 62C48.6206 62 62.5 48.1212 62.5 31C31.5 31 31.5 62 31.5 62ZM62.5 31C62.5 13.8788 48.6206 0 31.5 0C31.5 0 31.5 31 62.5 31Z" fill="url(#paint0_linear_52_26)"/>
          <defs>
            <linearGradient id="paint0_linear_52_26" x1="31.5" y1="0" x2="31.5" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8F8F8" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Brand Identity",
      description: "Building a strong brand identity is essential for standing out in a crowded market.",
      features: ["Logo Design", "Cohesive Color Palettes", "Brand Guidelines"],
      icon: (
        <svg width="63" height="62" viewBox="0 0 63 62" fill="none">
          <path d="M9.66741 19.1937C9.31866 19.1322 8.96325 19.1011 8.6111 19.1011C5.67009 19.1011 3.16453 21.2056 2.65327 24.1051L0.592609 35.792C0.0128096 39.0798 2.21612 42.2263 5.50395 42.8061C5.8527 42.8676 6.20811 42.8988 6.56025 42.8988C9.50103 42.8988 12.0068 40.7941 12.5181 37.8948L14.5789 26.2079C15.1584 22.9199 12.9552 19.7735 9.66741 19.1937Z" fill="url(#paint0_linear_53_62)"/>
          <defs>
            <linearGradient id="paint0_linear_53_62" x1="7.58571" y1="19.1011" x2="7.58571" y2="42.8988" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B0B0B0"/>
              <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <div className="portfolio-sections">
      {/* Why Choose Me Section */}
      <section className="why-choose-section" id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </div>
              <span>Why Choose me</span>
            </div>
            <h2>Why Work with Me</h2>
          </div>
          
          <div className="features-grid">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </div>
              <span>Featured Work</span>
            </div>
            <h2>Recent Projects</h2>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-header">
                  <div className="project-info">
                    <div className="project-icon">
                      <svg viewBox="0 0 256 256">
                        <polyline points="168 128 216 176 168 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <polyline points="72 32 72 176 216 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                      </svg>
                    </div>
                    <h6>{item.title}</h6>
                  </div>
                  <span className="project-year">{item.year}</span>
                </div>
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <a href="#contact" className="cta-button">
              <span className="button-icon">
                <svg viewBox="0 0 256 256">
                  <polyline points="168 128 216 176 168 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  <polyline points="72 32 72 176 216 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                </svg>
              </span>
              Browse all work
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-intro">
            <div className="section-header">
              <div className="section-badge">
                <div className="badge-icon">
                  <svg viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                </div>
                <span>my Process</span>
              </div>
              <h2>My Creative Workflow</h2>
              <a href="#contact" className="cta-button">
                <span className="button-icon">
                  <svg viewBox="0 0 256 256">
                    <polyline points="168 128 216 176 168 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    <polyline points="72 32 72 176 216 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                  </svg>
                </span>
                Schedule a consultation
              </a>
            </div>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <h3>{step.number}. {step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </div>
              <span>What I Offer</span>
            </div>
            <h2>Empowering Brands Through Design</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="service-button">
                    <span className="button-icon">
                      <svg viewBox="0 0 256 256">
                        <polyline points="168 128 216 176 168 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <polyline points="72 32 72 176 216 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                      </svg>
                    </span>
                    Schedule a consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;