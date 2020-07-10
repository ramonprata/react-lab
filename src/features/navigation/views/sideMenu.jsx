import React, { useState } from 'react';
import List from '@material-ui/core/List';
import MenuOption from './menuOption';
import menu from '../menu.json';
import { Grid, Drawer, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuHeader from './menuHeader';
import { defaultTheme, theme } from '../../../shared/theme';
import { useEffect } from 'react';

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
  const { menuContainer, list, paperDrawer, elevation1 } = useStyles(menuIsOpened, isMobile)();

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
        uri={menuOption.uri}
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
    <Paper square>
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
        renderMenuContent()
      )}
    </Paper>
  );
};

const useStyles = (menuIsOpened = true, isMobile = false) =>
  makeStyles((theme) => {
    const { layout } = defaultTheme;
    const width = menuIsOpened ? layout.menuOpened : layout.menuClosed;
    return {
      paperDrawer: {
        overflow: 'hidden',
      },
      elevation1: {
        boxShadow: 'none',
      },
      menuContainer: {
        width,
        transition: 'all .2s linear',
        borderRight: `solid 1px ${theme.palette.grey[300]}`,
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
