import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Expense Tracker</h1>
        </div>
        <div className="nav-links">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </nav>
      <div className="header-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your expenses effortlessly and efficiently!</p>
      </div>
    </header>
  );
}

export default Header;
