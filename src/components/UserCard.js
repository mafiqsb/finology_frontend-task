import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserCard = ({ user }) => {
  const handleWebsiteClick = (website) => {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>}
        title={user.name}
        subheader={`@${user.username}`}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
          {user.address.city}, {user.address.zipcode}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <BusinessIcon fontSize="small" sx={{ mr: 1 }} />
          {user.company.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <EmailIcon fontSize="small" sx={{ mr: 1 }} />
          <span
            style={{ cursor: 'pointer', color: '#1976d2' }}
            onClick={() => handleEmailClick(user.email)}
            title="Send email"
          >
            {user.email}
          </span>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
          <span
            style={{ cursor: 'pointer', color: '#1976d2' }}
            onClick={() => handlePhoneClick(user.phone)}
            title="Call phone"
          >
            {user.phone}
          </span>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <LanguageIcon fontSize="small" sx={{ mr: 1 }} />
          <span
            style={{ cursor: 'pointer', color: '#1976d2' }}
            onClick={() => handleWebsiteClick(user.website)}
            title="Visit website"
          >
            {user.website}
          </span>
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 2, fontStyle: 'italic' }}
        >
          "{user.company.catchPhrase}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
