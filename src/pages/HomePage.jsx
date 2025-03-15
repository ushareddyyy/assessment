// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const products = [
  { id: "laptop1", name: "Laptop 1", price: 60000 },
  { id: "laptop2", name: "Laptop 2", price: 65000 },
  { id: "laptop3", name: "Laptop 3", price: 70000 },
  { id: "laptop4", name: "Laptop 4", price: 75000 },
  { id: "laptop5", name: "Laptop 5", price: 80000 },
  { id: "mobile1", name: "Mobile 1", price: 20000 },
  { id: "mobile2", name: "Mobile 2", price: 22000 },
  { id: "mobile3", name: "Mobile 3", price: 25000 },
  { id: "mobile4", name: "Mobile 4", price: 27000 },
  { id: "watch1", name: "Watch 1", price: 5000 },
  { id: "watch2", name: "Watch 2", price: 6000 },
  { id: "watch3", name: "Watch 3", price: 7000 },
  { id: "watch4", name: "Watch 4", price: 8000 },
  { id: "watch5", name: "Watch 5", price: 9000 },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleView = (product) => {
    navigate(`/dashboard/products/${product.id}`, { state: product });
  };

  return (
    <div className="home-container">
      <h2>👋 Welcome to the E-Commerce Admin Dashboard!</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`https://ecommerceappln.s3.eu-north-1.amazonaws.com/${product.id}.jpeg`}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleView(product)}>View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
