import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Products from "./component/Products";
import About from "./component/About";
import SharedLayout from "./component/SharedLayout";
import { CartProvider } from "./CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
