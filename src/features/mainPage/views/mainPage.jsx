import React, { useState } from 'react';
import { SideMenu } from '../../navigation/';
import Header from './header';
import { defaultTheme } from '../../../shared/theme';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssGridContainer, CssGridItem } from '../../../shared/components';

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
    <Paper square elevation={0} className={gridContainer}>
      <CssGridContainer
        templateCol={`${menuIsOpened ? 240 : 64} auto`}
        templateRow="64px auto"
        repeatCol={false}
      >
        <CssGridItem gridRow="1/3" gridContainer="1/2">
          <SideMenu
            isMobile={isMobile}
            menuIsOpened={menuIsOpened}
            toggleMenu={onToggleMenu}
          />
        </CssGridItem>
        <CssGridItem>
          <Header
            prefersDarkMode={prefersDarkMode}
            setPrefersDarkMode={setPrefersDarkMode}
            isMobile={isMobile}
            menuIsOpened={menuIsOpened}
            toggleMenu={onToggleMenu}
          />
        </CssGridItem>
        <CssGridItem>
          <Paper>{props.children}</Paper>
        </CssGridItem>
      </CssGridContainer>
    </Paper>
  );
};

const useStyles = (isMobile = false) =>
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
