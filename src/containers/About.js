import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const About = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      m: 5 }}>
      <Typography component="div" variant="h4" align="center" sx={{ m: 5 }}>
        Who Are We ?
      </Typography>
      <Link to="description">Description</Link>
      <Link to="services">Services</Link>
      <Outlet />
    </Box>
  )
}

export default About;
