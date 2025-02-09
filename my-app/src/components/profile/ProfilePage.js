import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ProfilePage() {
  return (
    <Box
      id="profile-icon"
      sx={{
        width: '300px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '8px',
        boxShadow: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        Name: John Doe
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: john.doe@example.com
      </Typography>
    </Box>
  );
}