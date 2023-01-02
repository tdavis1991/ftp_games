import { useState } from 'react';
import { Drawer, Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { AiOutlineMenu } from "react-icons/ai";
import { width } from '@mui/system';

const DrawerNavbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setOpen(true)} sx={{ display: isMobile ? '' : 'none' }}>
        <AiOutlineMenu />
      </IconButton>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <Box p={2} width='250px' textAlign='center'>
          <Typography sx={{ backgroundColor: '#2196f3', color: 'white', padding: '0.5rem' }} variant='h4'>FTP Games</Typography>
          <a href='/' style={{ textDecoration: 'none' }}><Typography variant='h6' sx={{ borderBottom: '1px solid black', padding: '1rem 0' }}>Home</Typography></a>
          <a href='/category' style={{ textDecoration: 'none' }}><Typography variant='h6' sx={{ borderBottom: '1px solid black', padding: '1rem 0' }}>Category</Typography></a>
          <a><Typography variant='h6' sx={{ borderBottom: '1px solid black', padding: '1rem 0' }}>About</Typography></a>
        </Box>
      </Drawer>
    </>
  )
}

export default DrawerNavbar;