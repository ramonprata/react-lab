import React, { useState, Suspense, lazy } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useWidthResize } from '../../../trials/customHooks';
import { dimenssions } from '../../../shared/screenDimensions';
import MainPage from './mainPage';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../homePage/views/HomePage'));
const ComponentsDemoPage = lazy(() =>
  import('../../componentsDemo/views/ComponentsDemoPage')
);
const StateMagementPage = lazy(() =>
  import('../../stateManagement/views/StateMagementPage')
);

const MainPageContainer = (props) => {
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
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/components" exact component={ComponentsDemoPage} />
            <Route
              path="/state-management"
              exact
              component={StateMagementPage}
            />
          </Switch>
        </Suspense>
      </MainPage>
    </ThemeProvider>
  );
};

export default MainPageContainer;
