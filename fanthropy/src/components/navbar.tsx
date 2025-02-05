import Logo from "../assets/logo.png";
import { ThemeSwitcher } from "./themeswitcher";
export const Navbar = () => {
  return (
    <>
      <div className="w-full flex  justify-center items-center bg-primary/35 text-text backdrop-blur-sm drop-shadow-sm fixed top-0 z-10">
        <div className="w-full text-sm max-w-screen-xl flex flex-row items-center justify-end gap-6 font-medium flex-wrap">
          <a href="/" className="mr-auto h-24 w-24">
            <img src={Logo} alt="Logo" />
          </a>
          <a href="/about">ABOUT</a>
          <a href="">FAQ</a>
          |
          <ThemeSwitcher />
          <button className="p-2 bg-yellow-500 font-bold cursor-pointer rounded-xl">DEMO</button>
        </div>
      </div>
    </>
  );
};
