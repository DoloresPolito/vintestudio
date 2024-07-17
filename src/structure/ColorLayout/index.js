import { useEffect } from 'react';
import styles from './style.module.scss'; 
import { useTheme } from '../../context/ThemeContext'; 

const ColorLayout = ({ children }) => {
  const { theme, toggleTheme, fonts } = useTheme();
  const themes = ['theme-1', 'theme-2', 'theme-3'];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = () => {
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    toggleTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'theme-1';
    toggleTheme(savedTheme);
  }, []);

  return (
    <div>
      <header className={styles.themeSwitcher}>
        <button onClick={handleThemeChange}>Change the mood</button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default ColorLayout;