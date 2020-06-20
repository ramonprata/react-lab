import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../logo.svg';
import { defaultTheme } from '../../../shared/theme';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean
  };
 */

const MenuHeader = (props) => {
  const { isMobile } = props;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={styles.headerContainer}
    >
      <Grid container direction="row" alignItems="center">
        <img src={logo} className="app-logo" alt="logo" />
        {!isMobile && (
          <Typography variant="h5" color="primary">
            React lab
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
const styles = {
  headerContainer: {
    height: defaultTheme.layout.headerHeight,
    backgroundColor: 'tomato',
  },
};
export default MenuHeader;
