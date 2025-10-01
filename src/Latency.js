import React, { useEffect, useState } from "react";
import Exhibit from "./Exhibit";

function Latency() {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLatency(Date.now() - data.timestamp);
    };
    return () => ws.close();
  }, []);

  return (
    <Exhibit heading="Network Latency">
      <p>{latency} ms</p>
    </Exhibit>
  );
}

export default Latency;
