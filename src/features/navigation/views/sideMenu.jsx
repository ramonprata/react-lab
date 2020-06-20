import React from 'react';
import List from '@material-ui/core/List';
import MenuOption from './menuOption';
import menu from '../menu.json';
import { Grid } from '@material-ui/core';
import MenuHeader from './menuHeader';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const SideMenu = (props) => {
  const { isMobile } = props;
  const renderMenuOptions = () => {
    return menu.map((menuOption) => (
      <MenuOption
        key={`menuOption-${menuOption.id}`}
        label={isMobile ? '' : menuOption.label}
        icon={menuOption.icon}
        onClick={() => {}}
      />
    ));
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <MenuHeader />
      </Grid>
      <Grid item>
        <List component="nav" aria-label="main mailbox folders">
          {renderMenuOptions()}
        </List>
      </Grid>
    </Grid>
  );
};

export default SideMenu;
