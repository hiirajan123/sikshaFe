import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    alert(`Password reset link sent to ${email}`);
    navigate('/');
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
        Forgot Password
      </Typography>
      <TextField 
        label="Enter your Email" 
        fullWidth 
        margin="normal" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
     <Button
        variant="contained"
        sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
        fullWidth
        onClick={handleResetPassword}
        disabled={!email}>
        Reset Password
    </Button>
    </Box>
  );
}
