import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ users, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{error}</p>
        <button
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="no-results-container">
        <div className="no-results-icon">🔍</div>
        <h3 className="no-results-title">No users found</h3>
        <p className="no-results-message">
          Try adjusting your search criteria or clearing the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
