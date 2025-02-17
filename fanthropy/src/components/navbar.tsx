import Logo from "../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";
export const Navbar = () => {
  const [stackOpen, setStackOpen] = useState(false);

  return (
    <>
      <div className="w-full flex  justify-center items-center bg-primary/35 text-text backdrop-blur-sm drop-shadow-sm fixed top-0 z-10">
        {stackOpen == false ? (
          <div className="w-full text-sm max-w-screen-xl flex flex-row items-center justify-end gap-6 font-medium flex-wrap">
            <Link to="/" className="mr-auto h-24 w-24">
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="hidden md:flex flex-row items-center justify-end gap-6 px-4">
            <Link to="/about">About</Link>
              {/* <ThemeSwitcher /> */}
              <button className="p-2 bg-yellow-500 font-bold cursor-pointer rounded-xl">
                <a href="https://www.canva.com/design/DAGfY1k2nes/VwNQskkZhlUsbALFzODImw/view?mode=prototype" target="_blank" rel="noreferrer nopener">DEMO</a>
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
          <div className="w-full text-sm max-w-screen-xl flex flex-col items-center justify-end pb-8 gap-6 font-medium flex-wrap">
            <Link to="/" className="mr-auto h-24 w-24">
              <img src={Logo} alt="Logo" />
            </Link>
            <Link to="/about">About</Link>
  
            {/* <ThemeSwitcher /> */}
            <button className="p-2 bg-yellow-500 font-bold cursor-pointer rounded-xl">
                <a href="https://www.canva.com/design/DAGfY1k2nes/VwNQskkZhlUsbALFzODImw/view?mode=prototype" target="_blank" rel="noreferrer nopener">DEMO</a>
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
