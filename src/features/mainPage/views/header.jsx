import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Icon,
  IconButton,
  Tooltip,
} from '@material-ui/core/';
import { Logo } from '../../../shared/components';
/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const Header = (props) => {
  const { isMobile, toggleMenu, setPrefersDarkMode } = props;
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
        <Tooltip title="dark/light mode">
          <IconButton onClick={setPrefersDarkMode}>
            <Icon color={'common'}>wb_incandescent</Icon>
          </IconButton>
        </Tooltip>
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
        paddingRight: 8,
      },
    })
  );

export default Header;
