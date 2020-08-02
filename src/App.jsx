import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPageContainer } from './features/mainPage';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Router>
      <MainPageContainer />
    </Router>
  );
}

export default App;
