import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPageContainer } from './features/mainPage';
import MapaContainer from './features/mapaFrota/views/MapaContainer';
// import { theme } from './shared/theme';

function App() {
  return (
    <Router>
      <MapaContainer />
      {/* <MainPageContainer /> */}
    </Router>
  );
}

export default App;
