import { Route, Routes } from "react-router";
import { Feed } from "../pages/Feed";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
};
