import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import SharedLayout from "./component/SharedLayout";
import Signup from "./component/Signup";
import Login from "./component/Login";
import SharedCameraLayout from "./SharedCameraLayout";
import { CartProvider } from "./CartContext";

import SupportAdmin from "./SupportAdmin";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="support" element={<SupportAdmin />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="products/:id/tryon" element={<SharedCameraLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
