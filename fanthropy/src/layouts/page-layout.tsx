import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
