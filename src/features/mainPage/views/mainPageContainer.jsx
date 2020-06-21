import React, { useState } from 'react';
import { useWidthResize } from '../../../trials/customHooks';
import { dimenssions } from '../../../shared/screenDimensions';
import MainPage from './mainPage';

const MainPageContainer = () => {
  const { isMobile } = useWidthResize(dimenssions.smartphone);
  return <MainPage isMobile={isMobile} />;
};

export default MainPageContainer;
