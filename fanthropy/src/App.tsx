import { Route, Routes } from "react-router";
import { Index } from "./pages";
import { PageLayout } from "./layouts/page-layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </>
  );
};
