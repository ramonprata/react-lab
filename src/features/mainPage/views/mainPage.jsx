import React, { useState } from 'react';
import { SideMenu } from '../../navigation/';
import Header from './header';
import { defaultTheme } from '../../../shared/theme';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const MainPage = (props) => {
  const { isMobile, prefersDarkMode, setPrefersDarkMode } = props;
  const [menuIsOpened, toggleMenu] = useState(true);
  const { gridContainer, gridContent, menu, content } = useStyles(isMobile)();

  const onToggleMenu = () => {
    toggleMenu(!menuIsOpened);
  };

  return (
    <div className={gridContainer}>
      <div className={gridContent}>
        <div className={menu}>
          <SideMenu
            isMobile={isMobile}
            menuIsOpened={menuIsOpened}
            toggleMenu={onToggleMenu}
          />
        </div>
        <Header
          prefersDarkMode={prefersDarkMode}
          setPrefersDarkMode={setPrefersDarkMode}
          isMobile={isMobile}
          menuIsOpened={menuIsOpened}
          toggleMenu={onToggleMenu}
        />
        <Paper square elevation={0}>
          <Grid
            container
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            direction="column"
            className={content}
          >
            {props.children}
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = (primary = false) =>
  makeStyles((theme) =>
    createStyles({
      gridContainer: {
        margin: 0,
        padding: 0,
        display: 'grid',
        height: '100vh',
        overflow: 'hidden',
        maxWidth: window.innerWidth,
      },
      gridContent: {
        display: 'grid',
        gridTemplateColumns: `auto 1fr`,
        gridTemplateRows: '64px auto',
        height: '100%',
      },
      menu: {
        gridRow: '1/3',
      },
      content: {
        // flex: 1,
        height: window.innerHeight - defaultTheme.layout.headerHeight,
        overflowY: 'auto',
        paddingTop: 16,
        paddingLeft: 16,
      },
    })
  );

export default MainPage;
