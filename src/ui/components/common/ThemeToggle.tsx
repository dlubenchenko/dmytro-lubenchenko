import { useTheme } from '../../../state/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-3 rounded bg-primary-light dark:bg-primary-dark dark:text-gray-lighter font-outfit transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};