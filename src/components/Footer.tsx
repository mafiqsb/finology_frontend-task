import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 'auto',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mb: 3,
          }}
        >
          <Box sx={{ flex: { md: 2 } }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Finology
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Asia-Pacific fintech company providing innovative financial
              solutions and technology services.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              flex: { md: 3 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Solutions
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Contact
                </Link>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  API Reference
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Blog
                </Link>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Support
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Help & FAQ
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Community
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Status
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Feedback
                </Link>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Cookie Policy
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  Compliance
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Finology. All rights reserved.
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
