import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { Logo } from '../../../shared/components';

const HomePage = () => {
  return (
    <Box height="100%">
      <Typography variant="h5">Home page</Typography>
      <Grid container direction="column" alignItems="center" justify="center">
        <Logo height={200} />
      </Grid>
    </Box>
  );
};

export default HomePage;
