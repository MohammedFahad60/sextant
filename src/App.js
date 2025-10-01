import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import PublicIP from "./PublicIP";
import Latency from "./Latency";

function App() {
  return (
    <div className="App">
      <Banner />
      
      <Exhibit heading="Public IP Addresses">
        <PublicIP type="ipv4" />
        <PublicIP type="ipv6" />
      </Exhibit>

      <Latency />
    </div>
  );
}

export default App;
