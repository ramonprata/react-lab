import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { MainPageContainer } from './features/mainPage';
import { theme } from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPageContainer />;
    </ThemeProvider>
  );
}

export default App;
