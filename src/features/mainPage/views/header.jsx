import React from 'react';

import {
  Grid,
  Typography,
  Icon,
  IconButton,
  Paper,
  Switch,
  FormControlLabel,
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
  return (
    <Paper square elevation={0} style={{ height: '100%' }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ height: '100%', borderBottom: 'solid 1px #e0e0e0' }}
      >
        <Grid container direction="row" alignItems="center" item md={9} xs={8}>
          {isMobile && (
            <IconButton onClick={toggleMenu}>
              <Icon>menu</Icon>
            </IconButton>
          )}
          <Logo />
          <Typography variant="h5">Page title</Typography>
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
    </Paper>
  );
};

export default Header;
