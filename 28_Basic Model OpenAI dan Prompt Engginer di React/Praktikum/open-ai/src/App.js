import "./assets/bootstrap/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page from "./pages/page";


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="page" element={<Page />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
