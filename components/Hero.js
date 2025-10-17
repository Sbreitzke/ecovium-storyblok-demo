import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="hero-section" {...storyblokEditable(blok)}>
      {blok.video_url && (
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1728 564'%3E%3Crect fill='%23122f4e' width='1728' height='564'/%3E%3C/svg%3E"
          >
            <source src={blok.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      )}

      <div className="hero-content">
        {blok.title && <h1 className="hero-title">{blok.title}</h1>}
        {blok.subtitle && <p className="hero-subtitle">{blok.subtitle}</p>}

        {(blok.primary_button_text || blok.secondary_button_text) && (
          <div className="hero-actions">
            {blok.primary_button_text && (
              <button className="btn-primary">{blok.primary_button_text}</button>
            )}
            {blok.secondary_button_text && (
              <a href={blok.secondary_button_link || "#"} className="btn-secondary">
                {blok.secondary_button_text}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0l1.5 1.5L4 9h16v2H4l7.5 7.5L10 20l-10-10L10 0z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 564px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: 1;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(18, 47, 78, 0.4);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero-title {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 3rem;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        }

        .hero-actions {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .btn-primary {
          background: #00a8e1;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .btn-primary:hover {
          background: #0090c4;
          transform: translateY(-2px);
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 1rem;
          transition: gap 0.3s;
        }

        .btn-secondary:hover {
          gap: 0.75rem;
        }

        .btn-secondary svg {
          transform: rotate(180deg);
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 400px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .btn-primary {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-video {
            display: none;
          }

          .video-background {
            background: #122f4e;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
