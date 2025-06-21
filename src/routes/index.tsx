import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/layout/Menu";

const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AppRoutes;
