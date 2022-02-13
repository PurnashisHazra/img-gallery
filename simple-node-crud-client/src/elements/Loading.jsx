/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = ({ text = false }) => {
  return (
    <Box m={2}>
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='3rem' />
      </Box>
      {!!text && (
        <Typography
          style={{ marginTop: '2rem' }}
          align='center'
          color='textSecondary'
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
