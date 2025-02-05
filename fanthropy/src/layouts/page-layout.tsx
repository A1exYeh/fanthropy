import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import "../styles/global.css";

export const PageLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-24 min-h-screen h-fit bg-background">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
