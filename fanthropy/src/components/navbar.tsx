import Logo from "../assets/logo.png";
import { ThemeSwitcher } from "./themeswitcher";
export const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-primary/35 backdrop-blur-sm drop-shadow-xs fixed top-0 z-10">
        <div className="w-full text-sm max-w-screen-lg flex flex-row items-center justify-end gap-6">
          <a href="/" className="mr-auto h-24 w-24">
            <img src={Logo} alt="Logo" />
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
