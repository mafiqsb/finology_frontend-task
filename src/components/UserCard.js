import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const handleWebsiteClick = (website) => {
    // Ensure the website has a protocol
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
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
        <div className="user-basic-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-username">@{user.username}</p>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-item">
          <span className="detail-icon">✉️</span>
          <span
            className="detail-text clickable"
            onClick={() => handleEmailClick(user.email)}
            title="Send email"
          >
            {user.email}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">📍</span>
          <span className="detail-text">
            {user.address.city}, {user.address.zipcode}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🏢</span>
          <span className="detail-text">{user.company.name}</span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">📞</span>
          <span
            className="detail-text clickable"
            onClick={() => handlePhoneClick(user.phone)}
            title="Call phone"
          >
            {user.phone}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🌐</span>
          <span
            className="detail-text clickable"
            onClick={() => handleWebsiteClick(user.website)}
            title="Visit website"
          >
            {user.website}
          </span>
        </div>
      </div>

      <div className="user-footer">
        <span className="company-catchphrase">
          "{user.company.catchPhrase}"
        </span>
      </div>
    </div>
  );
};

export default UserCard;
