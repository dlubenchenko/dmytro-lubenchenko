import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getLocal, setLocal } from '../helpers/storage';

type Language = 'en' | 'ua';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = getLocal<Language>('language');
    if (stored === 'en' || stored === 'ua') return stored;
    return 'en';
  });

  const [messages, setMessages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    import(`../languages/${language}.json`)
      .then((mod) => setMessages(mod.default))
      .finally(() => setIsLoading(false));
    setLocal('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (key: string) => messages[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};