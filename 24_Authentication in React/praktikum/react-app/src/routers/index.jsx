import { Routes, Route } from "react-router-dom";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import ViewProduct from "../pages/ViewProduct";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "../pages/loginPage";
import PrivateRoute from "./privateRoute";
import { Unauthorized } from "../pages/Unauthorized";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<CreateProduct />}></Route>
        <Route path="/products/product/:id" element={<ViewProduct />}></Route>
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>}></Route>
      <Route path="unauthorized" element={<Unauthorized />}></Route>
    </Routes>
  );
}
