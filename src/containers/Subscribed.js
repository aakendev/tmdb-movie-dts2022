import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const Subscribed = () => {
  const params = useParams();
  return (
    <Box sx={{ m: 10 }}>
      Thanks for Subscribing!
      Your Plan : {params?.plan}
    </Box>
  )
}

export default Subscribed;
