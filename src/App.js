import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Region from './components/Region';
import DetailCountry from './components/DetailCountry';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:region" element={<Region />} />
      <Route path="/:region/:country" element={<DetailCountry />} />
    </Routes>
  </>
);

export default App;
