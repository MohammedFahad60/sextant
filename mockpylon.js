const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 55455 });

wss.on("connection", (ws) => 
    {
  console.log("Client connected");

  const interval = setInterval(() => {
    ws.send(JSON.stringify({ timestamp: Date.now() }));
  }, 1000);

  ws.on("close", () => clearInterval(interval));
});

console.log("Mock Pylon WebSocket running at ws://localhost:55455");
