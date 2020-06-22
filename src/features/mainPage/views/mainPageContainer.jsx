import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useWidthResize } from '../../../trials/customHooks';
import { dimenssions } from '../../../shared/screenDimensions';
import MainPage from './mainPage';

const MainPageContainer = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const { isMobile } = useWidthResize(dimenssions.smartphone);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <MainPage
        prefersDarkMode={prefersDarkMode}
        setPrefersDarkMode={() => setPrefersDarkMode(!prefersDarkMode)}
        isMobile={isMobile}
      />
    </ThemeProvider>
  );
};

export default MainPageContainer;
