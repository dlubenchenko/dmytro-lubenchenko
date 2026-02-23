import { useLanguage } from '../../state/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languageHandler = (lang: string) => `px-3 py-1 rounded ${language === lang ? 'bg-primary text-gray dark:text-white' : 'bg-primary-dark text-gray-light'}`;

  return (
    <div className="flex gap-2">
      <button
        className={languageHandler('en')}
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
      >
        EN
      </button>
      <button
        className={languageHandler('ua')}
        onClick={() => setLanguage('ua')}
        disabled={language === 'ua'}
      >
        UA
      </button>
    </div>
  );
};