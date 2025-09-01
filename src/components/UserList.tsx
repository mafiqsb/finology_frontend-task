import React from 'react';
import {
  Grid,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Paper,
  Container,
} from '@mui/material';
import { Refresh, SearchOff } from '@mui/icons-material';
import UserCard from './UserCard';
import { User } from '../services/userService';

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
  retryFetch: () => void;
  hasActiveFilters: boolean;
}

const UserList: React.FC<UserListProps> = ({
  users,
  loading,
  error,
  retryFetch,
  hasActiveFilters,
}) => {
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: 2,
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" color="text.secondary">
          Loading users...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please wait while we fetch user data
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
        <Alert
          severity="error"
          sx={{
            mb: 3,
            '& .MuiAlert-message': {
              width: '100%',
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Typography variant="body2">{error}</Typography>
        </Alert>
        <Button
          variant="contained"
          startIcon={<Refresh />}
          onClick={retryFetch}
          size="large"
        >
          Try Again
        </Button>
      </Paper>
    );
  }

  if (users.length === 0) {
    return (
      <Paper elevation={1} sx={{ p: 6, textAlign: 'center' }}>
        <SearchOff sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h5" color="text.primary" gutterBottom>
          {hasActiveFilters ? 'No users match your search' : 'No users found'}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {hasActiveFilters
            ? 'Try adjusting your search criteria or clearing filters'
            : "We couldn't find any users to display"}
        </Typography>
        {hasActiveFilters && (
          <Button variant="outlined" onClick={() => window.location.reload()}>
            Clear All Filters
          </Button>
        )}
      </Paper>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ px: 0 }}>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid key={user.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default UserList;
