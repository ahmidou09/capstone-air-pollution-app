import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Region from './components/Region';
import AirPollutionDetails from './components/AirPollutionDetails';

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:region" element={<Region />} />
      <Route path="/:region/:country/:lat/:lon" element={<AirPollutionDetails />} />
    </Routes>
  </div>
);

export default App;
