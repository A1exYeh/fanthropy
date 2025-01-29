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
        className="cursor-pointer bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
      >
        {theme == "dark" ? "D" : "L"}
      </button>
    </>
  );
};
