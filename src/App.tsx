import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Footer from './components/Footer';
import useUsers from './hooks/useUsers';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066cc',
      light: '#00ccff',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  const {
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCity,
    setSelectedCity,
    selectedCompany,
    setSelectedCompany,
    filterOptions,
    clearAllFilters,
    hasActiveFilters,
    totalUsers,
    filteredCount,
    retryFetch,
  } = useUsers();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
            filterOptions={filterOptions}
            clearAllFilters={clearAllFilters}
            hasActiveFilters={hasActiveFilters}
            totalUsers={totalUsers}
            filteredCount={filteredCount}
          />

          <UserList
            users={users}
            loading={loading}
            error={error}
            retryFetch={retryFetch}
            hasActiveFilters={hasActiveFilters}
          />
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
