import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

/**
 * TODO: set props type flow js
 * type Props = {
    foo: number,
    bar?: string,
  };
 */

const MenuOption = (props) => {
  const { label, icon, onClick } = props;
  return (
    <ListItem button>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default MenuOption;
