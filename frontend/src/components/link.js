// src/components/LinksSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/link.css';

function LinksSection() {
  return (
    <div className="links-section">
      <h2>Explore More</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default LinksSection;
