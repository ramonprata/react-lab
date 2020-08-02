//@flow
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
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
  const { label, icon, onClick, isSubOption } = props;
  const { listItemContainer } = useStyles(isSubOption)();

  return (
    <ListItem button onClick={onClick} className={listItemContainer}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        primary={!isSubOption && label}
        secondary={isSubOption && label}
        secondaryTypographyProps={{ color: 'primary' }}
      />
    </ListItem>
  );
};

export type OptionItem = {
  id: string,
  label: string,
  icon: string,
  isSubOption?: boolean,
};

export type Option = {
  ...OptionItem,
  subMenu: Array<OptionItem>,
};

const useStyles = (isSubOption = false) =>
  makeStyles((theme) =>
    createStyles({
      listItemContainer: {
        height: !isSubOption ? 56 : 48,
        paddingLeft: isSubOption ? 32 : 16,
      },
    })
  );

export default MenuOption;
