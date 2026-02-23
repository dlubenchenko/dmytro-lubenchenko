export type Language = 'en' | 'ua';

export type LanguageContextProps = {
    language: Language;
    setLanguage: (lang: Language) => void;
}