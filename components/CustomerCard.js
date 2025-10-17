import { storyblokEditable } from "@storyblok/react";
import { useLanguage } from "../context/LanguageContext";

const CustomerCard = ({ blok }) => {
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
  const companyName = blok.company_name;
  const imageUrl = blok.image?.filename;
  const link = getTranslated(blok.link);

  return (
    <div {...storyblokEditable(blok)} className="customer-card-wrapper">
      <div className="group">
        {imageUrl && <img className="image" src={imageUrl} alt={companyName} />}
        <div className="rectangle-3"></div>
        <div className="text-wrapper-3">{companyName}</div>
        <p className="ensuring-the">
          {title || description}
        </p>
        <div className="vector-wrapper">
          <img className="vector" src="/img/vector-3.svg" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
