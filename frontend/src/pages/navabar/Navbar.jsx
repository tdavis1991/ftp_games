import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoGameControllerOutline } from 'react-icons/io5';


const navItems = ['Home', 'Category', 'About'];

const Navbar = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position='fixed'>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <a href='/' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', display: 'flex' }}><IoGameControllerOutline size={30} style={{ display: 'inline', margin: '0 0.5rem' }} /> FTP Games</a>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <a href='/'>
              <Button key='home' sx={{ color: '#fff' }}>
                Home
              </Button>
            </a>
            <a href='/category'>
              <Button key='category' sx={{ color: '#fff' }}>
                Category
              </Button>
            </a>
            <Button key='About' sx={{ color: '#fff' }}>
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
