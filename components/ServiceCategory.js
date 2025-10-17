import { storyblokEditable, renderRichText } from "@storyblok/react";
import { useLanguage } from "../context/LanguageContext";

const ServiceCategory = ({ blok }) => {
  const { language } = useLanguage();

  // Get translated content based on current language
  const getTranslated = (field) => {
    if (typeof field === 'object' && field[language]) {
      return field[language];
    }
    return field;
  };

  const title = getTranslated(blok.title);
  const description = getTranslated(blok.description);
  const details = getTranslated(blok.details);
  const iconName = blok.icon_name;

  return (
    <div {...storyblokEditable(blok)} className="service-category-wrapper">
      <div className="text-wrapper-7">{title}</div>
      {description && (
        <p className="text-wrapper-11">{description}</p>
      )}
      {details && (
        <div
          className="discover-our"
          dangerouslySetInnerHTML={{ __html: renderRichText(details) }}
        />
      )}
    </div>
  );
};

export default ServiceCategory;
