import React from 'react';
import UserCard from './UserCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import './UserList.css';

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
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;
