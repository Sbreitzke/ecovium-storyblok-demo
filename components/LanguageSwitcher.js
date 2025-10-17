import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <button
        onClick={() => switchLanguage('de')}
        style={{
          padding: '5px 10px',
          background: language === 'de' ? '#0066cc' : 'transparent',
          color: language === 'de' ? '#fff' : '#000',
          border: '1px solid #0066cc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: language === 'de' ? 'bold' : 'normal'
        }}
      >
        DE
      </button>
      <button
        onClick={() => switchLanguage('en')}
        style={{
          padding: '5px 10px',
          background: language === 'en' ? '#0066cc' : 'transparent',
          color: language === 'en' ? '#fff' : '#000',
          border: '1px solid #0066cc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: language === 'en' ? 'bold' : 'normal'
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
