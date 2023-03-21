import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import SharedLayout from "./component/SharedLayout";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
