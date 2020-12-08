import React from 'react';
import LocationsList from './components/LocationsList';
import MapOptions from './components/MapOptions';
import Map from './components/Map';
import './styles/main.scss';

function App() {
  return (
    <div className='App' id='app'>
      <LocationsList />
      <MapOptions />
      <Map />
    </div>
  );
}

export default App;
