import React from 'react';
 import { CircularProgress, Box, Skeleton } from '@mui/material';

const ShimmerCircular = () => {
  return (
     
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: 4,
        width: 300,
        height: 300,
        border: '1px solid #ddd',
        borderRadius: 4,
      }}
    >
      <CircularProgress />
      <Skeleton variant="text" width={200} height={20} />
      <Skeleton variant="rectangular" width={250} height={100} />
    </Box>
  );
};

export default ShimmerCircular;
