// src/context/OrderContext.jsx
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders((prev) => [...prev, product]);
  };

  const removeOrder = (indexToRemove) => {
    setOrders((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
