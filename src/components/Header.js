import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">User Directory</h1>
        <p className="app-subtitle">
          Discover and connect with users from around the world
        </p>
      </div>
    </header>
  );
};

export default Header;
