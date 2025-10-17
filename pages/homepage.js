import Head from "next/head";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>ecovium - Logistics Solutions</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Fixed Header */}
      <header className="main-header">
        <div className="header-container">
          <img src="https://c.animaapp.com/hZJG2TsC/img/ecovium-logo--r--blue-7@2x.png" alt="ecovium" className="logo" />

          <nav className="main-nav">
            <a href="#" className="nav-item">
              Product
              <svg width="11" height="6" viewBox="0 0 11 6" fill="currentColor">
                <path d="M5.5 6L0 0h11L5.5 6z"/>
              </svg>
            </a>
            <a href="#" className="nav-item">
              Industries
              <svg width="11" height="6" viewBox="0 0 11 6" fill="currentColor">
                <path d="M5.5 6L0 0h11L5.5 6z"/>
              </svg>
            </a>
            <a href="#" className="nav-item">
              Resources
              <svg width="11" height="6" viewBox="0 0 11 6" fill="currentColor">
                <path d="M5.5 6L0 0h11L5.5 6z"/>
              </svg>
            </a>
            <a href="#" className="nav-item">
              Who We Are
              <svg width="11" height="6" viewBox="0 0 11 6" fill="currentColor">
                <path d="M5.5 6L0 0h11L5.5 6z"/>
              </svg>
            </a>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>

            <div className="language-selector">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
              <span>EN</span>
            </div>

            <button className="cta-button">Request Demo</button>
          </div>
        </div>
        <div className="header-shadow"></div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1728 564'%3E%3Crect fill='%23122f4e' width='1728' height='564'/%3E%3C/svg%3E"
          >
            <source src="/WEB_BG_Home_Corporate_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Simple Chain all-in-one<br/>logistics solution</h1>
          <p className="hero-subtitle">
            Build a more resilient business with integrated<br/>logistics solutions from a single source.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Book Free Demo</button>
            <a href="#" className="btn-secondary">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0l1.5 1.5L4 9h16v2H4l7.5 7.5L10 20l-10-10L10 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <p className="about-text">
          Ecovium's integrated logistics solutions are developed by a team of logistics IT experts from various areas
          who collaborate closely to devise intelligent solutions for the entire value chain.
        </p>
        <a href="#" className="about-link">
          About us more info
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0l1.5 1.5L4 9h16v2H4l7.5 7.5L10 20l-10-10L10 0z"/>
          </svg>
        </a>
      </section>

      {/* Product Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Product Categories</h2>

        <div className="categories-tabs">
          <button className="tab-btn active">Customs</button>
          <button className="tab-btn">Warehouse</button>
          <button className="tab-btn">Shipping</button>
          <button className="tab-btn">Transport</button>
          <button className="tab-btn">Hardware</button>
          <button className="tab-btn">Business Intelligence</button>
        </div>

        <div className="category-content">
          <div className="category-image">
            <img src="https://c.animaapp.com/hZJG2TsC/img/image-1963.png" alt="Smooth customs clearance" />
          </div>

          <div className="category-details">
            <h3 className="category-title">Smooth customs clearance</h3>
            <p className="category-description">
              With our solutions, you optimize your processes around customs and foreign trade, compliance and risk management
              including preferential rules of origin.
            </p>
            <div className="category-solutions">
              <strong>Discover our solutions:</strong>
              <ul>
                <li>ATLAS Export / Import</li>
                <li>Confirmation of arrival</li>
                <li>Sanctions list check</li>
                <li>Export control</li>
                <li>Preferential Origin (EU)</li>
                <li>SAP® Add-ons</li>
              </ul>
            </div>
            <a href="#" className="category-link">
              Explore Consulting Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0l1.5 1.5L4 9h16v2H4l7.5 7.5L10 20l-10-10L10 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-section">
        <h2 className="section-title-light">We deliver success</h2>

        <div className="success-grid">
          {[
            { company: "DHL", image: "https://c.animaapp.com/hZJG2TsC/img/image-1959@2x.png", description: "Ensuring the integrity of DHLs warehouse" },
            { company: "BENUTA", image: "https://c.animaapp.com/hZJG2TsC/img/image-1960@2x.png", description: "Ensuring the integrity of DHLs warehouse" },
            { company: "MERCEDES", image: "https://c.animaapp.com/hZJG2TsC/img/image-1961@2x.png", description: "Ensuring the integrity of DHLs warehouse" },
            { company: "COFFE", image: "https://c.animaapp.com/hZJG2TsC/img/image-1962@2x.png", description: "Ensuring the integrity of DHLs warehouse" }
          ].map((story, i) => (
            <article key={i} className="story-card">
              <img src={story.image} alt={story.company} className="story-image" />
              <div className="story-content">
                <h3 className="story-company">{story.company}</h3>
                <p className="story-description">{story.description}</p>
                <a href="#" className="story-link">
                  <svg width="42" height="40" viewBox="0 0 42 40" fill="none">
                    <rect width="42" height="40" rx="2" fill="#f2f6f9"/>
                    <path d="M15 20h12m0 0l-6-6m6 6l-6 6" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <h2 className="section-title">Support Beyond Software</h2>

        <div className="support-grid">
          {[
            { title: "24/7 Customer Support", description: "Connect with a real ecovium expert via email, chat, or phone support in less than a minute." },
            { title: "Seamless Carrier Integrations", description: "Connect to 200+ out-of-the-box integrations you already use and love in the Ecovium Carrier API." },
            { title: "Community of Peers", description: "Connect, learn, inspire, and grow your online community within customs, warehousing, shipping and transport, as well as a range of hardware like you around the world." },
            { title: "On-Demand Trainings", description: "Learn anywhere, anytime with free self-paced, online training courses and role-based certifications." }
          ].map((support, i) => (
            <div key={i} className="support-card">
              <h3 className="support-title">{support.title}</h3>
              <p className="support-description">{support.description}</p>
              <a href="#" className="support-link">
                <svg width="39" height="40" viewBox="0 0 39 40" fill="none">
                  <rect width="39" height="40" rx="2" fill="#f2f6f9"/>
                  <path d="M14 20h11m0 0l-5.5-5.5M25 20l-5.5 5.5" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              End-to-end logistics solutions from a single source
            </blockquote>
            <p className="testimonial-text">
              At ecovium, in 12 location in Europe with 300+ dedicated employees we bring together experts from the fields of
              customs, warehousing, shipping, transport and hardware under one roof and offer our customers sustainable and
              economical solutions for their value-added processes.
            </p>
            <cite className="testimonial-author">Patrick Wallinger</cite>
          </div>
          <div className="testimonial-image">
            <img src="https://c.animaapp.com/hZJG2TsC/img/image-1965.png" alt="Patrick Wallinger" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="https://c.animaapp.com/hZJG2TsC/img/ecovium-logo--r--blue-8@2x.png" alt="ecovium" className="footer-logo" />
            <address className="footer-contact">
              +49 211 8492 0<br/>
              Info@ecovium.com<br/>
              Justus-von-Liebig-Straße 3<br/>
              31535 Neustadt<br/>
              Germany
            </address>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><span className="social-icon">𝕏</span></a>
              <a href="#" aria-label="Facebook"><span className="social-icon">f</span></a>
              <a href="#" aria-label="Xing"><span className="social-icon">X</span></a>
              <a href="#" aria-label="LinkedIn"><span className="social-icon">in</span></a>
              <a href="#" aria-label="Instagram"><span className="social-icon">📷</span></a>
            </div>
            <div className="footer-legal">
              <a href="https://ecovium.com/en/">© 2024 ecovium</a>
              <a href="https://ecovium.com/en/legal-notice">Legal notice</a><br/>
              <a href="https://ecovium.com/de/datenschutzinformation">Data protection</a>
              <a href="https://ecovium.com/en/terms">GTC</a>
            </div>
          </div>

          <nav className="footer-nav">
            <div className="footer-column">
              <h3 className="footer-heading">Main pages</h3>
              <ul className="footer-links">
                <li><a href="#">Home page</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Who We Are</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Contact us</h3>
              <ul className="footer-links">
                <li><a href="#">Contact form</a></li>
                <li><a href="#">Chat with us</a></li>
                <li><a href="#">Talk to field expert</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>

              <h3 className="footer-heading">Language</h3>
              <div className="footer-language">
                <svg width="36" height="24" viewBox="0 0 36 24" fill="currentColor">
                  <rect width="36" height="8" fill="#000"/>
                  <rect y="8" width="36" height="8" fill="#D00"/>
                  <rect y="16" width="36" height="8" fill="#FFCE00"/>
                </svg>
                <span>German</span>
              </div>
            </div>
          </nav>

          <div className="footer-cta">
            <div className="footer-brochure">
              <img src="https://c.animaapp.com/hZJG2TsC/img/ls-build-smarter-supply-chains-4@2x.png" alt="Brochure" className="brochure-image" />
              <img src="https://c.animaapp.com/hZJG2TsC/img/ecovium-logo--r--blue-8-1@2x.png" alt="ecovium" className="brochure-logo" />
            </div>
            <button className="btn-download">Download Brochure</button>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="chat-button" aria-label="Chat with us">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 2C8.3 2 2 7.6 2 14.5c0 3.4 1.5 6.5 4 8.7V30l6.3-3.5c1.2.3 2.4.5 3.7.5 7.7 0 14-5.6 14-12.5S23.7 2 16 2z"/>
        </svg>
      </button>
    </>
  );
}
