import { useLanguage } from '../../../state/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languageHandler = (lang: 'en' | 'ua') =>
    `p-3 rounded-md text-sm inline-flex items-center justify-center ${
      language === lang
        ? 'bg-primary-light dark:bg-primary-dark text-white'
        : 'bg-transparent text-gray dark:text-gray-light'
    }`;

  return (
    <div className="flex gap-2 items-center flex-wrap justify-center">
      <button
        className={languageHandler('en')}
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        className={languageHandler('ua')}
        onClick={() => setLanguage('ua')}
        disabled={language === 'ua'}
        aria-pressed={language === 'ua'}
      >
        UA
      </button>
    </div>
  );
};