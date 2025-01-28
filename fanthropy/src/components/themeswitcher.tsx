import { useState, useEffect } from "react";
import "../styles/global.css";
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      return "light";
    } else {
      return localTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(`Theme: ${theme}`);
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="cursor-pointer bg-red-500"
      >
        {theme == "dark" ? "Dark" : "Light"}
      </button>
    </>
  );
};
