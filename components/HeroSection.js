import { storyblokEditable } from "@storyblok/react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = ({ blok }) => {
  const { language } = useLanguage();

  // Get translated content based on current language
  const getTranslated = (field) => {
    if (typeof field === 'object' && field[language]) {
      return field[language];
    }
    return field;
  };

  const headline = getTranslated(blok.headline);
  const subtext = getTranslated(blok.subtext);
  const ctaPrimaryText = getTranslated(blok.cta_primary_text);
  const ctaPrimaryLink = getTranslated(blok.cta_primary_link);
  const ctaSecondaryText = getTranslated(blok.cta_secondary_text);
  const ctaSecondaryLink = getTranslated(blok.cta_secondary_link);
  const videoUrl = blok.video_url?.filename || '/WEB_BG_Home_Corporate_1.mp4';

  return (
    <div {...storyblokEditable(blok)}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '1728px',
          height: '564px',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Hero Container */}
      <div className="ls-build-smarter"></div>

      {/* Hero Content */}
      <div className="simple-chain-all-in">
        {headline || 'Simple Chain all-in-one logistics solution'}
      </div>

      <p className="ecovium-s-integrated">
        {subtext || "Ecovium's integrated logistics solutions..."}
      </p>

      {/* CTAs - will integrate these when we have the full design */}
      {ctaPrimaryText && (
        <div className="hero-cta-primary">
          <a href={ctaPrimaryLink || '#'}>{ctaPrimaryText}</a>
        </div>
      )}

      {ctaSecondaryText && (
        <div className="hero-cta-secondary">
          <a href={ctaSecondaryLink || '#'}>{ctaSecondaryText}</a>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
