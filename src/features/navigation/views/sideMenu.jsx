import React, { useState } from 'react';
import List from '@material-ui/core/List';
import MenuOption from './menuOption';
import menu from '../menu.json';
import { Grid, Drawer, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuHeader from './menuHeader';
import { defaultTheme } from '../../../shared/theme';
import Collapse from '@material-ui/core/Collapse';
import { useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
    menuIsOpened: boolean
  };
 */

const SideMenu = (props) => {
  const { isMobile, menuIsOpened, toggleMenu } = props;
  const [showContent, setShowContent] = useState(true);
  const { menuContainer, list, paperDrawer } = useStyles(menuIsOpened, isMobile)();

  useEffect(() => {
    setTimeout(() => {
      setShowContent(menuIsOpened);
    }, 250);
  }, [menuIsOpened]);

  const renderMenuOptions = () => {
    return menu.map((menuOption) => (
      <MenuOption
        key={`menuOption-${menuOption.id}`}
        label={showContent && menuIsOpened ? menuOption.label : ''}
        icon={menuOption.icon}
        onClick={() => {}}
      />
    ));
  };

  const renderMenuContent = () => {
    return (
      <Grid container direction="column" className={menuContainer}>
        <MenuHeader
          isMobile={isMobile}
          menuIsOpened={menuIsOpened}
          toggleMenu={() => toggleMenu(!menuIsOpened)}
          showContent={showContent}
        />
        <Divider variant="fullWidth" />
        <List
          component="nav"
          classes={{
            root: list,
          }}
        >
          {renderMenuOptions()}
        </List>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      {isMobile ? (
        <Drawer
          PaperProps={{
            classes: {
              root: paperDrawer,
            },
          }}
          elevation={0}
          onClose={toggleMenu}
          open={menuIsOpened}
          anchor="left"
        >
          {renderMenuContent()}
        </Drawer>
      ) : (
        <Paper square elevation={0}>
          {renderMenuContent()}
        </Paper>
      )}
    </React.Fragment>
  );
};

const useStyles = (menuIsOpened = true, isMobile = false) =>
  makeStyles(() => {
    const { layout } = defaultTheme;
    const width = menuIsOpened ? layout.menuOpened : layout.menuClosed;
    return {
      paperDrawer: {
        overflow: 'hidden',
      },
      menuContainer: {
        width,
        transition: 'all .2s linear',
      },
      list: {
        width,
        height: window.innerHeight - layout.headerHeight,
        overflowY: 'hidden',
        '&:hover': {
          overflowY: 'hidden',
        },
      },
    };
  });
export default SideMenu;
