import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPageContainer } from './features/mainPage';
import MapaFrota from './features/mapaFrota/views/MapaFrota';
// import { theme } from './shared/theme';

function App() {
  return (
    <Router>
      <MapaFrota />
      {/* <MainPageContainer /> */}
    </Router>
  );
}

export default App;
