// src/pages/Dashboard.jsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HomePage from './HomePage';
import OrdersPage from './OrdersPage';
import ProductsPage from './ProductsPage';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="products" element={<ProductsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
