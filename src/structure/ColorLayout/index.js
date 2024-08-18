import { useEffect } from "react";
import styles from "./style.module.scss";
import { useTheme } from "../../context/Themecontext";

const ColorLayout = ({ children }) => {
  const { theme, toggleTheme, fonts } = useTheme();
  const themes = [
    "theme-1",
    // "theme-2",
    // "theme-3",
    "theme-4",
    "theme-5",
    // "theme-6",
    // "theme-7",
    "theme-8",
    "theme-9",
    "theme-10",
    // "theme-11",
    // "theme-12",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = () => {
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    toggleTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-1";
    toggleTheme(savedTheme);
  }, []);

  return (
    <div>
      {/* <header className={styles.themeSwitcher}>
        <button onClick={handleThemeChange}>
          <p>Change the mood</p>
        </button>
      </header> */}
      <main>{children}</main>
    </div>
  );
};

export default ColorLayout;
