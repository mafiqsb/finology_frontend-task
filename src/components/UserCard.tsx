import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  IconButton,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import {
  Email,
  Phone,
  Language,
  Business,
  LocationOn,
  Person,
} from '@mui/icons-material';
import { User } from '../services/userService';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const handleWebsiteClick = (website: string) => {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '');
    window.location.href = `tel:+${cleanPhone}`;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatAddress = () => {
    const { street, suite, city, zipcode } = user.address;
    return `${street}, ${suite}, ${city} ${zipcode}`;
  };

  return (
    <Card
      elevation={2}
      sx={{
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          elevation: 6,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 56,
              height: 56,
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            {getInitials(user.name)}
          </Avatar>
        }
        title={
          <Typography variant="h6" fontWeight="bold" color="primary">
            {user.name}
          </Typography>
        }
        subheader={
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}
          >
            <Person fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
          </Box>
        }
        action={
          <Chip
            label={`ID: ${user.id}`}
            size="small"
            variant="outlined"
            color="primary"
          />
        }
        sx={{ pb: 1 }}
      />

      <CardContent sx={{ pt: 0 }}>
        <Stack spacing={2}>
          {/* Contact Information */}
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Contact Information
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  size="small"
                  onClick={() => handleEmailClick(user.email)}
                  sx={{ p: 0.5 }}
                >
                  <Email fontSize="small" color="primary" />
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                  onClick={() => handleEmailClick(user.email)}
                >
                  {user.email}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  size="small"
                  onClick={() => handlePhoneClick(user.phone)}
                  sx={{ p: 0.5 }}
                >
                  <Phone fontSize="small" color="primary" />
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                  onClick={() => handlePhoneClick(user.phone)}
                >
                  {user.phone}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  size="small"
                  onClick={() => handleWebsiteClick(user.website)}
                  sx={{ p: 0.5 }}
                >
                  <Language fontSize="small" color="primary" />
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                  onClick={() => handleWebsiteClick(user.website)}
                >
                  {user.website}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider />

          {/* Location & Company */}
          <Box>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Location & Company
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn fontSize="small" color="action" sx={{ mt: 0.25 }} />
                <Box>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="medium"
                  >
                    {user.address.city}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatAddress()}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Business fontSize="small" color="action" sx={{ mt: 0.25 }} />
                <Box>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="medium"
                  >
                    {user.company.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontStyle="italic"
                  >
                    "{user.company.catchPhrase}"
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCard;
