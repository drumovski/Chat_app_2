var app = require("express")();
var httpServer = require("http").createServer(app);
const PORT = 8080;
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

httpServer.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  /* socket object may be used to send specific messages to the new connected client */

  console.log("new client connected");
  socket.emit('connection', null);
});
