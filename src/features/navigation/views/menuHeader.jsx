import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../../../shared/theme';
import { BoxContent } from '../../../shared/components';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean
  };
 */

const MenuHeader = (props) => {
  const { isMobile } = props;
  return (
    <Grid container direction="column" justify="center" style={styles.headerContainer}>
      <BoxContent pl={16}>
        {!isMobile && (
          <Typography variant="h5" color="primary">
            React lab
          </Typography>
        )}
      </BoxContent>
    </Grid>
  );
};
const styles = {
  headerContainer: {
    minHeight: defaultTheme.layout.headerHeight,
    backgroundColor: 'tomato',
  },
};
export default MenuHeader;
