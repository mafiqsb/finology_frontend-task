import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box>
              <Typography variant="h5" component="h1" fontWeight="bold">
                Finology
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Asia-Pacific fintech company
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
