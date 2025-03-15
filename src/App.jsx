// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrdersPage from "./pages/OrdersPage";
import { OrderProvider } from "./context/OrderContext"; // ✅

function App() {
  return (
    <OrderProvider> {/* ✅ Wrap everything */}
      <Router basename="/assessment">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard/products/:id" element={<ProductDetailPage />} />
          <Route path="/dashboard/orders" element={<OrdersPage />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
