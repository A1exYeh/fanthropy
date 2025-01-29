import ViteLogo from "../assets/vite.svg";
import { ThemeSwitcher } from "./themeswitcher";
export const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-primary/35 backdrop-blur-sm drop-shadow-xs fixed top-0 z-10">
        <div className="w-full text-sm max-w-screen-lg flex flex-row items-center justify-end gap-6 p-3">
          <a href="/" className="mr-auto">
            <img src={ViteLogo} alt="Logo" />
          </a>
          <a href="">ABOUT</a>
          <a href="">FAQ</a>
          |
          <ThemeSwitcher />
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};
