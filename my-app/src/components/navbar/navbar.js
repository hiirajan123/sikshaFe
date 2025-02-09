import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button,TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function PrimarySearchAppBar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');
  
    const handleLogin = () => {
      navigate('/login');
    };
  
    const handleSearch = () => {
      alert(`Searching for: ${searchTerm}`);
    };

    const handleHome = () =>{
        navigate('/home');
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ background: 'green' }}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <span 
            style={{ fontWeight: '1000', cursor: 'pointer' }}
            onMouseLeave={(e) => e.target.style.color = 'inherit'}
            onClick={handleHome}
            >
            Siksha
            </span>
          </Typography>

          {/* Search Field */}
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ background: 'white', borderRadius: 1 }}
          />

          {/* Search Button */}
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
          <IconButton size="large" color="inherit">
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>            
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
