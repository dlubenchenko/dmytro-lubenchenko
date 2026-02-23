import { createContext, useContext, useState, type ReactNode } from 'react';
import { getLocal } from '../helpers/storage';
import type { Language, LanguageContextProps } from '../types';

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = getLocal<Language>('language');
    if (stored === 'en' || stored === 'ua') return stored;
    return 'en';
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};