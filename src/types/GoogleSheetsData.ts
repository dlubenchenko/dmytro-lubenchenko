export type Lang = 'en' | 'ua';

export type RequestStatus = 'success' | 'error';

export type ResumeSection = 'header' | 'contacts' | 'socials' | 'languages' | 'about';

/**
 * Значення з колонки component у Google Sheet.
 */
export type SheetComponent = 'header' | 'contacts' | 'socials' | 'language' | 'about';

export type SheetBoolean = boolean | 'true' | 'false' | '' | null | undefined;
export type SheetNumber = number | `${number}` | '' | null | undefined;

export interface GoogleSheetRow {
  id: string;
  item_en: string;
  item_ua: string;
  desc_en: string;
  desc_ua: string;
  component: SheetComponent;
  img?: string;
  link?: string;
  color?: string;
  imgColor?: string;
  radius?: string;
  order?: SheetNumber;
  enable?: SheetBoolean;
}

// Явно описуємо що повертає наш Apps Script
export interface GoogleSheetsApiResponse {
  result: RequestStatus;
  data?: { resume: GoogleSheetRow[] };
  message?: string;
}

export interface ResumeItem {
  id: string;
  item: string;
  details: string;
  img?: string;
  link?: string;
  color?: string;
  imgColor?: string;
  radius?: string;
  order: number;
}

/** Секція проіндексована по id — для O(1) доступу */
export type ResumeIndex = Record<string, ResumeItem>;

/** Всі секції резюме, кожна вже проіндексована */
export type ResumeSheets = Record<ResumeSection, ResumeIndex>;

export type ResumeData = Record<Lang, ResumeSheets>;

export interface DataContextProps {
  data: ResumeData | null;
  loading: boolean;
  error: string | null;
}