import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../login/LoginContext';

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = React.useContext(LoginContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const handleHome = () => {
    navigate('/home');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewSubscription = () => {
    navigate('/subscription');
    handleClose();
  };

  const handleViewProfile = () => {
    navigate('/profile');
    handleClose();
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true);
    handleClose();
  };
  
  const handleViewPublishedCourses = () => {
    navigate('/published-courses');
    handleClose();
  };

  const handleLogoutConfirm = () => {
    setOpenLogoutDialog(false);
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
  };

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
          {!isLoggedIn && (
            <IconButton size="large" color="inherit">
              <Button variant="contained" color="secondary" onClick={handleLogin}>
                Login
              </Button>
            </IconButton>
          )}
          {isLoggedIn && (
            <div>
              <IconButton
                size="large"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
                <MenuItem onClick={handleViewSubscription}>My Subscription</MenuItem>
                <MenuItem onClick={handleViewPublishedCourses}>Published Courses</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              <Dialog
                open={openLogoutDialog}
                onClose={handleLogoutCancel}
              >
                <DialogTitle>{"Logout"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Do you really want to logout?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleLogoutCancel} color="primary">
                    No
                  </Button>
                  <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}