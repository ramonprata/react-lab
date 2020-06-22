import React, { useState } from 'react';
import { SideMenu } from '../../navigation/';
import Header from './header';
import { BoxContent } from '../../../shared/components';
import { defaultTheme } from '../../../shared/theme';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const MainPage = (props) => {
  const { isMobile, prefersDarkMode, setPrefersDarkMode } = props;
  const [menuIsOpened, toggleMenu] = useState(true);
  const { gridContainer, gridContent, menu, content } = getStyles(isMobile);

  const onToggleMenu = () => {
    toggleMenu(!menuIsOpened);
  };

  return (
    <div style={gridContainer}>
      <div style={gridContent}>
        <div style={menu}>
          <SideMenu isMobile={isMobile} menuIsOpened={menuIsOpened} toggleMenu={onToggleMenu} />
        </div>
        <Header
          prefersDarkMode={prefersDarkMode}
          setPrefersDarkMode={setPrefersDarkMode}
          isMobile={isMobile}
          menuIsOpened={menuIsOpened}
          toggleMenu={onToggleMenu}
        />
        <BoxContent pd={16} style={content}>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
          <div style={{ height: 100 }}>content</div>
        </BoxContent>
      </div>
    </div>
  );
};

const getStyles = (isMobile = false) => {
  return {
    gridContainer: {
      margin: 0,
      padding: 0,
      display: 'grid',
      height: '100vh',
      width: '100%',
    },
    gridContent: {
      display: 'grid',
      gridTemplateColumns: `auto 1fr`,
      gridTemplateRows: '64px auto',
      height: '100%',
    },
    menu: {
      gridRow: '1/3',
    },
    content: {
      backgroundColor: 'violet',
      overflowY: 'auto',
      height: window.innerHeight - defaultTheme.layout.headerHeight,
    },
  };
};

export default MainPage;
