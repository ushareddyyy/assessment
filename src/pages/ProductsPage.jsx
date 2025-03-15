// src/pages/ProductsPage.jsx
import React from "react";
import { useOrder } from "../context/OrderContext";
import "./ProductsPage.css";

const productList = [
  { id: "laptop1", name: "Laptop 1", price: 60000 },
  { id: "laptop2", name: "Laptop 2", price: 65000 },
  { id: "mobile1", name: "Mobile 1", price: 20000 },
  { id: "mobile2", name: "Mobile 2", price: 25000 },
  { id: "watch1", name: "Watch 1", price: 5000 },
  { id: "watch2", name: "Watch 2", price: 6000 },
  // Add more if needed
];

const ProductsPage = () => {
  const { addOrder } = useOrder();

  const handleOrder = (product) => {
    addOrder({
      ...product,
      emoji: "🛍️",
      delivery: "Delivers in 2-3 days",
    });
    alert("Product ordered successfully!");
  };

  return (
    <div className="products-container">
      <h2>📦 All Products</h2>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`https://ecommerceappln.s3.eu-north-1.amazonaws.com/${product.id}.jpeg`}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleOrder(product)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
