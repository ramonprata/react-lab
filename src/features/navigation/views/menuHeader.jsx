import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import logo from '../../../logo.svg';

const MenuHeader = () => {
  return (
    <Grid container direction="column" justify="center" style={styles.headerContainer}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>
          <img src={logo} className="app-logo" alt="logo" />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary">
            React lab
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
const styles = {
  headerContainer: {
    height: 64,
    backgroundColor: 'tomato',
    // paddingLeft: 16,
  },
};
export default MenuHeader;
