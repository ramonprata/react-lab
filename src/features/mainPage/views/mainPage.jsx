import React, { useState } from 'react';
import { SideMenu } from '../../navigation/';
import Header from './header';
import { defaultTheme } from '../../../shared/theme';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
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
        templateCol={`${menuIsOpened ? '240px' : '64px'} 1fr`}
        repeatCol={false}
      >
        <CssGridItem>
          <SideMenu
            isMobile={isMobile}
            menuIsOpened={menuIsOpened}
            toggleMenu={onToggleMenu}
          />
        </CssGridItem>
        <CssGridItem colStartEnd={isMobile ? '1/3' : '2/3'} rowStartEnd="1/3">
          <CssGridContainer templateRow="64px 1fr" repeatCol={false}>
            <CssGridItem rowStartEnd="1/2">
              <Header
                prefersDarkMode={prefersDarkMode}
                setPrefersDarkMode={setPrefersDarkMode}
                isMobile={isMobile}
                menuIsOpened={menuIsOpened}
                toggleMenu={onToggleMenu}
              />
            </CssGridItem>
            <CssGridItem rowStartEnd="2/3" className={content}>
              {props.children}
            </CssGridItem>
          </CssGridContainer>
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
        height: '100vh',
        overflow: 'hidden',
        maxWidth: window.innerWidth,
      },
      content: {
        height: window.innerHeight - theme.layout.headerHeight,
        overflowY: 'auto',
        paddingTop: 16,
        paddingLeft: 16,
        backgroundColor: 'violet',
      },
    })
  );

export default MainPage;
