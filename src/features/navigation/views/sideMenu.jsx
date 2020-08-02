import React, { useState } from 'react';
import List from '@material-ui/core/List';
import MenuOption, { OptionItem, Option } from './menuOption';
import menu from '../menu.json';
import { Grid, Drawer, Paper, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuHeader from './menuHeader';
import { defaultTheme } from '../../../shared/theme';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
    menuIsOpened: boolean
  };
 */

const SideMenu = (props) => {
  const history = useHistory();
  const { isMobile, menuIsOpened, toggleMenu } = props;
  const [showContent, setShowContent] = useState(true);
  const [selectedOption, setSelectedOption] = useState('0');

  const { menuContainer, list, paperDrawer } = useStyles(
    menuIsOpened,
    isMobile
  )();

  useEffect(() => {
    setTimeout(() => {
      setShowContent(menuIsOpened);
    }, 250);
  }, [menuIsOpened]);

  const goTo = (uri: string) => {
    history.push(uri);
  };

  const onClickMenuOption = (option: Option) => {
    if (option.subMenu) {
      if (selectedOption === option.id) {
        setSelectedOption(null);
      } else {
        setSelectedOption(option.id);
      }
    }
    goTo(option.uri);
  };

  const renderMenuOptions = () => {
    return menu.map((menuOption: Option) => (
      <React.Fragment>
        <MenuOption
          key={`menuOption-${menuOption.id}`}
          label={showContent && menuIsOpened ? menuOption.label : ''}
          icon={menuOption.icon}
          onClick={() => onClickMenuOption(menuOption)}
        />
        <Collapse
          in={selectedOption === menuOption.id}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {menuOption.subMenu &&
              menuOption.subMenu.map((subOption: OptionItem) => (
                <MenuOption
                  key={`menuOption-${subOption.id}`}
                  label={showContent && menuIsOpened ? subOption.label : ''}
                  icon={subOption.icon}
                  onClick={() => onClickMenuOption(subOption)}
                  isSubOption
                />
              ))}
          </List>
        </Collapse>
      </React.Fragment>
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
