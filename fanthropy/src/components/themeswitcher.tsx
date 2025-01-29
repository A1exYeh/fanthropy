import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
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
        className="cursor-pointer text-text flex items-center justify-center"
      >
        {theme == "dark" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </button>
    </>
  );
};
