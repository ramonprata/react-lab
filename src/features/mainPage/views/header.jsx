import React from 'react';
import logo from '../../../logo.svg';
import { Grid, Typography } from '@material-ui/core';
import { BoxContent } from '../../../shared/components';
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
      <BoxContent pl={16}>
        <Typography variant="h5" color="primary">
          Page title
        </Typography>
      </BoxContent>
    </Grid>
  );
};

export default Header;
