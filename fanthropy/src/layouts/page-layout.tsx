import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import "../styles/global.css";

export const PageLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-16 min-h-screen">
        <Outlet />
      </main>
      <footer className="bg-black">FOOTER</footer>
    </>
  );
};
