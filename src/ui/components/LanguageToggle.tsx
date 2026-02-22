import { useLanguage } from '../../state/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  const languageHandler = (lang: string) => `px-3 py-1 rounded ${language === lang ? 'bg-primary-dark text-gray dark:text-white' : 'bg-primary text-white'}`;

  if (isLoading) return <span>Loading…</span>;

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