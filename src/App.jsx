import React from 'react';
import './App.css';
import { MainPageContainer } from './features/mainPage';
// import { theme } from './shared/theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainPageContainer />
    </Router>
  );
}

export default App;
