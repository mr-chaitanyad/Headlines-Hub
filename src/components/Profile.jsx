import React from 'react';

export default function Profile({ userName, userMail }) {
  return (
    <div style={{
      minHeight: '80vh',
      backgroundColor: '#f4f4f4', // light grey
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '80px', // to account for NavBar
    }}>
      <div style={{
        backgroundColor: '#ffffff', // white
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <img 
          src="/profile_icon.png"
          alt="Profile"
          style={{ width: '90px', marginBottom: '20px' }}
        />
        <h2 style={{ color: '#333' }}>{userName || 'Guest'}</h2>
       
        <p style={{ color: '#555', fontSize: '18px' }}>
          <strong>Email:</strong> {userMail || 'Not Logged In'}
        </p>
      </div>
    </div>
  );
}
