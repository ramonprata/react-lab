import React from 'react';
import { Typography, Grid, Icon, IconButton, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../../../shared/theme';
import { BoxContent } from '../../../shared/components';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
    menuIsOpened: boolean
  };
 */

const MenuHeader = (props) => {
  const { menuIsOpened, toggleMenu, showContent } = props;
  const padding = menuIsOpened ? 16 : 0;
  const justify = menuIsOpened ? 'space-between' : 'center';
  return (
    <Grid container direction="column" justify="center" style={styles.headerContainer}>
      <BoxContent pl={padding} pr={padding}>
        <Grid container direction="row" alignItems="center" justify={justify}>
          {menuIsOpened && showContent && (
            <Typography variant="h5" color="primary">
              <Fade in={showContent} timeout={200}>
                <div>React lab</div>
              </Fade>
            </Typography>
          )}
          <IconButton onClick={toggleMenu} disableRipple={true}>
            <Icon color="primary">{menuIsOpened ? 'close' : 'menu_open'}</Icon>
          </IconButton>
        </Grid>
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
