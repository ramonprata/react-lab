import React from 'react';
import { Typography, Grid, Icon, IconButton } from '@material-ui/core';
import { defaultTheme } from '../../../shared/theme';
import { BoxContent, Logo } from '../../../shared/components';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
    menuIsOpened: boolean
  };
 */

const MenuHeader = (props) => {
  const { menuIsOpened, toggleMenu, showContent, isMobile } = props;
  const padding = menuIsOpened && !isMobile ? 16 : 0;
  const justify = menuIsOpened ? 'space-between' : 'center';
  return (
    <Grid container direction="column" justify="center" style={styles.headerContainer}>
      <BoxContent pl={padding}>
        <Grid container direction="row" alignItems="center" justify={justify}>
          {isMobile && <Logo />}
          {menuIsOpened && showContent && <Typography variant="h5">React lab</Typography>}
          <IconButton onClick={toggleMenu} disableRipple={true}>
            <Icon>{menuIsOpened ? 'close' : 'menu_open'}</Icon>
          </IconButton>
        </Grid>
      </BoxContent>
    </Grid>
  );
};

const styles = {
  headerContainer: {
    minHeight: defaultTheme.layout.headerHeight,
    borderBottom: 'solid 1px #e0e0e0',
  },
};

export default MenuHeader;
