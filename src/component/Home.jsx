import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="..\assets\sunglasses_ background.jpg"
          className="card-img"
          alt="Background"
          height="800px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Season</h5>
            <p className="card-text lead fs-2">
              Check out all the trends
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
