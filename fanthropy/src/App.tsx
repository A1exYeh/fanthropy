import { Route, Routes } from "react-router";
import { Index } from "./pages";
import { About } from "./pages/about";
import { PageLayout } from "./layouts/page-layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
