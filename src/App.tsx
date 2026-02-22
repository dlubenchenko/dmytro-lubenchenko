import { ThemeProvider } from "./state/ThemeContext";
import { LanguageProvider } from "./state/LanguageContext";
import { Layout } from "./ui/components/Layout";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </ThemeProvider>
  );
}
