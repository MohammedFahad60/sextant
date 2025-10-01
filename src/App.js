import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant Dashboard" />

      <Exhibit heading="Network Metrics">
        <p>Latency, Bandwidth, Packet Loss, and other metrics will appear here.</p>
      </Exhibit>

      <Exhibit heading="Alerts">
        <p>Any network alerts will appear here.</p>
      </Exhibit>
    </div>
  );
}

export default App;
