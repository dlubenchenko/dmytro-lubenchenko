import { ThemeProvider } from "./state/ThemeContext";
import { LanguageProvider } from "./state/LanguageContext";
import { Layout } from "./pages/Layout";
import { DataProvider } from "./state/DataContext";

import './ui/styles/reset.module.scss'

export default function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Layout />
        </LanguageProvider>
      </ThemeProvider>
    </DataProvider>
  );
}
