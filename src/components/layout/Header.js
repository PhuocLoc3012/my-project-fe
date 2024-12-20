import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import PathConstants from "../../routes/pathConstants";  // Import PathConstants
import Register from '../../pages/Auth/components/Register';
import { useState } from 'react';
import Login from 'pages/Auth/components/Login/index';

// Replace with the pages you want: Home and About
const pages = [
  { label: 'Home', path: PathConstants.HOME },
  { label: 'About', path: PathConstants.ABOUT },
  { label: 'Login', path: PathConstants.LOGIN},
  { label: 'Register', path: null}
];



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [modalType, setModalType] = useState('')
  const [open, setOpen] = useState(false)

  const handleClickOpen = (modalType) => {
    setModalType(modalType);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  //  setModalType(''); // Reset modal type
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PL 
          </Typography>

          <Typography component={Link} // Use Link component for navigation
            to={PathConstants.HOME} 
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex'},
            
              fontWeight: 700,
            
              color: 'inherit',
              textDecoration: 'none',
            
            }}>Home</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />




          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            <Typography >
                <Button  sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => handleClickOpen('login')}>Login</Button>
            </Typography>
            <Typography>
                <Button  sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => handleClickOpen('register')}>Register</Button>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>


        <Dialog
          open={open}
          onClose={(event, reason) => {
            if (reason === "backdropClick") {
              return; // Prevent the dialog from closing
            }
            handleClose(); // Close the dialog for other reasons
          }}
          disableEscapeKeyDown
        >
          {/* <DialogTitle>Subscribe</DialogTitle> */}
          <DialogContent>
          <DialogContentText>
                {modalType === 'login' ? <Login /> : <Register />}
              </DialogContentText>
            </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

