import React, { useState } from 'react';
import List from '@material-ui/core/List';
import MenuOption from './menuOption';
import menu from '../menu.json';
import { Grid } from '@material-ui/core';
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
  const { isMobile } = props;
  const [menuIsOpened, toggleMenu] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const { menuContainer } = useStyles(menuIsOpened);

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

  return (
    <ClickAwayListener onClickAway={() => toggleMenu(false)}>
      <Grid container direction="column" style={menuContainer}>
        <MenuHeader
          isMobile={isMobile}
          menuIsOpened={menuIsOpened}
          toggleMenu={() => toggleMenu(!menuIsOpened)}
          showContent={showContent}
        />
        <List component="nav" aria-label="main mailbox folders">
          {renderMenuOptions()}
        </List>
      </Grid>
    </ClickAwayListener>
  );
};

const useStyles = (menuIsOpened = true) => {
  const { layout } = defaultTheme;
  return {
    menuContainer: {
      width: menuIsOpened ? layout.menuOpened : layout.menuClosed,
      transition: 'all .2s linear',
    },
  };
};
export default SideMenu;
