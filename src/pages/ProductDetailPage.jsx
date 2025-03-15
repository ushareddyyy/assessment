// src/pages/ProductDetailPage.jsx
import { useLocation } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { state: product } = useLocation();
  const { addOrder } = useOrder();

  if (!product) return <div>Product not found</div>;

  const handleOrder = () => {
    addOrder({
      ...product,
      emoji: "🛍️",
      delivery: "Delivers in 2-3 days",
    });
    alert("Product ordered successfully!");
  };

  return (
    <div className="product-detail">
      <img
        src={`https://ecommerceappln.s3.eu-north-1.amazonaws.com/${product.id}.jpeg`}
        alt={product.name}
        className="detail-img"
      />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Delivers in 2-3 days</p>
      <button className="order-btn" onClick={handleOrder}>
        Order Now
      </button>
    </div>
  );
};

export default ProductDetailPage;
