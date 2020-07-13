import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPageContainer } from './features/mainPage';
import { Paper } from '@material-ui/core';
// import { theme } from './shared/theme';

function App() {
  return (
    <Router>
      <MainPageContainer />
    </Router>
  );
}

export default App;
