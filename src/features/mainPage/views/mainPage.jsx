import React, { useState } from 'react';
import { SideMenu } from '../../navigation/';
import Header from './header';
import { BoxContent } from '../../../shared/components';

/**
 * TODO: set props type flow js
 * type Props = {
    isMobile: boolean,
  };
 */

const MainPage = (props) => {
  const { isMobile } = props;
  const { gridContainer, gridFour, menu, content, header, colorFour } = getStyles(isMobile);

  return (
    <div style={gridContainer}>
      <div style={gridFour}>
        <div style={menu}>
          <SideMenu isMobile={isMobile} />
        </div>

        <Header isMobile={isMobile} />

        <BoxContent pl={16} style={content}>
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
    gridFour: {
      display: 'grid',
      gridTemplateColumns: `auto 1fr`,
      gridTemplateRows: '64px auto',
      height: '100%',
    },

    menu: { backgroundColor: 'orange', gridRow: '1/3' },

    content: {
      backgroundColor: 'violet',
      overflowY: 'auto',
      height: window.innerHeight - 64,
    },
    colorFour: { backgroundColor: 'aqua' },
  };
};

export default MainPage;
