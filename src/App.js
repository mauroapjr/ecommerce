import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import About from "./component/About";
import SharedLayout from "./component/SharedLayout";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
