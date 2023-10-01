import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import LandingPage from "./pages/LandingPage";
import ViewProduct from "./pages/ViewProduct";


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="products" element={<CreateProduct />}></Route>
          <Route path="products/product/:id" element={<ViewProduct/>}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;