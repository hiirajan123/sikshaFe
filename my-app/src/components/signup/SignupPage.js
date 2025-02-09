import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    alert('Signup successful');
    navigate('/'); // Redirect to homepage after signup
  };

  return (
    <Box
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
        Sign Up
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button 
        variant="contained" 
        sx={{ backgroundColor: 'blue', width: '302px', color: 'white', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={handleSignup}
      >
        Sign Up
      </Button>
    </Box>
  );
}