import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { fetchGoogleSheetsData } from '../api/googleSheetsData';
import type { DataContextProps, ResumeData } from '../types';

const DataContext = createContext<DataContextProps | undefined>(undefined);

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return 'Unknown data loading error';
}

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchGoogleSheetsData();
        if (!active) return;
        setData(result);
      } catch (err: unknown) {
        if (!active) return;
        setError(getErrorMessage(err));
      } finally {
        if (!active) return;
        setLoading(false);
      }
    };

    void load();

    return () => {
      active = false;
    };
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};