import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Icon,
  IconButton,
  Paper,
  Switch,
  FormControlLabel,
  AppBar,
} from '@material-ui/core';
import { BoxContent, Logo } from '../../../shared/components';
/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const Header = (props) => {
  const { isMobile, toggleMenu, prefersDarkMode, setPrefersDarkMode } = props;
  const { containerHeader } = useStyles()();
  return (
    <Grid container alignItems="center" className={containerHeader}>
      <Grid container direction="row" alignItems="center" item md={9} xs={8}>
        {isMobile && (
          <IconButton onClick={toggleMenu}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Logo />
        <Typography variant="h5">Rect lab</Typography>
      </Grid>
      <Grid container direction="row" justify="flex-end" item md={3} xs={4}>
        <BoxContent pr={16}>
          <FormControlLabel
            labelPlacement="start"
            control={
              <Switch
                checked={prefersDarkMode}
                onChange={setPrefersDarkMode}
                name="checkedA"
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            }
            label="Dark mode"
          />
        </BoxContent>
      </Grid>
    </Grid>
  );
};

const useStyles = () =>
  makeStyles((theme) =>
    createStyles({
      containerHeader: {
        height: '100%',
        borderBottom: `solid 1px ${theme.palette.grey[300]}`,
      },
    })
  );

export default Header;
