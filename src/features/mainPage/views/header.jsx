import React from 'react';
import logo from '../../../logo.svg';
import { Grid, Typography } from '@material-ui/core';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const Header = (props) => {
  const { isMobile } = props;
  return (
    <Grid container direction="column" justify="center" style={{ backgroundColor: 'yellow' }}>
      <Typography variant="h5" color="primary">
        Page title
      </Typography>
    </Grid>
  );
};

export default Header;
