import { useTheme } from '../../state/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-primary-dark text-gray-lighter font-outfit transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};