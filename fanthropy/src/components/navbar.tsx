import ViteLogo from "../assets/vite.svg";
import { ThemeSwitcher } from "./themeswitcher";
export const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-primary">
        <div className="w-full max-w-screen-lg flex flex-row items-center justify-end gap-4 p-4">
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
