import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PublicIP from './PublicIP';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant Dashboard" />

      <Exhibit heading="User Public IPs">
        <PublicIP version="v4" />
        <PublicIP version="v6" />
      </Exhibit>
    </div>
  );
}

export default App;
