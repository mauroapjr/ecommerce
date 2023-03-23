import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import SharedLayout from "./component/SharedLayout";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  const [data, setData] = React.useState("");

  const fetchData = React.useCallback(async () => {
    axios.get("http://localhost:8080").then((response) => {
      console.log("RESPONSE", response);
      setData(response.data);
    });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  const [loginForm, setLoginForm] = useState("login");
  const [signupForm, setSignupForm] = useState("signup");
  const toggleForm = (formLogin, formSignup) => {
    setLoginForm(formLogin);
    setSignupForm(formSignup);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="about" element={<About />} />

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/* {loginForm === "login" ? (
              <Route path="login" element={<Login onFormSwitch={toggleForm} />} />
            ) : (
              <Route path="products" element={<Products onFormSwitch={toggleForm} />} />
            )}

            {signupForm === "signup" ? (
              <Route path="signup" element={<Signup onFormSwitch={toggleForm} />} />
            ) : (
              <Route path="products" element={<Products onFormSwitch={toggleForm} />} />
            )} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
