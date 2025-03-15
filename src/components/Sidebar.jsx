// src/components/Sidebar.jsx
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <Link to="/dashboard/">Home</Link>
        <Link to="/dashboard/orders">Orders</Link>
        <Link to="/dashboard/products">Products</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Sidebar;
