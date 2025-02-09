import Logo from "../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ThemeSwitcher } from "./themeswitcher";
export const Navbar = () => {
  const [stackOpen, setStackOpen] = useState(false);

  return (
    <>
      <div className="w-full flex  justify-center items-center bg-primary/35 text-text backdrop-blur-sm drop-shadow-sm fixed top-0 z-10">
        {stackOpen == false ? (
          <div className="w-full text-sm max-w-screen-xl flex flex-row items-center justify-end gap-6 font-medium flex-wrap">
            <a href="/" className="mr-auto h-24 w-24">
              <img src={Logo} alt="Logo" />
            </a>
            <div className="hidden md:flex flex-row items-center justify-end gap-6 px-4">
              <a href="/about">ABOUT</a>
              <a href="">FAQ</a>
              <ThemeSwitcher />
              <button className="p-2 bg-yellow-500 font-bold cursor-pointer rounded-xl">
                DEMO
              </button>
            </div>
            <button
              onClick={() => {
                setStackOpen(!stackOpen);
              }}
              className="md:hidden p-1 mr-4"
            >
              <Bars3Icon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        ) : (
          <div className="w-full text-sm max-w-screen-xl flex flex-col items-center justify-end gap-6 font-medium flex-wrap">
            <a href="/" className="mr-auto h-24 w-24">
              <img src={Logo} alt="Logo" />
            </a>
            <a href="/about">ABOUT</a>
            <a href="">FAQ</a>
            <ThemeSwitcher />
            <button className="p-2 bg-yellow-500 font-bold cursor-pointer rounded-xl">
              DEMO
            </button>
            <button
              onClick={() => {
                setStackOpen(!stackOpen);
              }}
              className="p-1"
            >
              <Bars3Icon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
