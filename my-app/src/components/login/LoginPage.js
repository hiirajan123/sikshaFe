import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert('Login successful');
    navigate('/'); // Redirect to homepage after login
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Redirect to Forgot Password page
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
        Login
      </Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button 
        variant="contained" 
        sx={{ backgroundColor: 'green', width: '302px', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}>
        Click Me
      </Button>

      {/* Forgot Password Link */}
      <Box mt={2}>
        <Link component="button" variant="body2" onClick={handleForgotPassword} sx={{ cursor: 'pointer' }}>
          Forgot Password?
        </Link>
      </Box>
    </Box>
  );
}
