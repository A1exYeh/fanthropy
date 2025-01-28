import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";

export const PageLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
