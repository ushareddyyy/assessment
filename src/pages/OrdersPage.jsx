// src/pages/OrdersPage.jsx
import { useOrder } from "../context/OrderContext";
import "./OrdersPage.css";

const OrdersPage = () => {
  const { orders, removeOrder } = useOrder();

  const handleCancel = (index) => {
    removeOrder(index);
    alert("Order canceled successfully!");
  };

  return (
    <div className="orders-container">
      <h2>🛒 Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <img
                src={`https://ecommerceappln.s3.eu-north-1.amazonaws.com/${order.id}.jpeg`}
                alt={order.name}
                className="order-img"
              />
              <div>
                <h3>{order.emoji} {order.name}</h3>
                <p>Price: ₹{order.price}</p>
                <p>{order.delivery}</p>
              </div>
              <button className="cancel-btn" onClick={() => handleCancel(index)}>
                ❌ Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
