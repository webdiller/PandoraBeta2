const socket = require("socket.io");
const http = require("http");

module.exports.createSocket = (http) => {
  const io = socket(http);

  io.on("connection", function (socket) {
    socket.on("CHATS:JOIN", (chatsId) => {
      socket.chatsId = chatsId;
      socket.join(chatsId);
    });
    socket.on("CHATS:TYPING", (obj) => {
      socket.broadcast.emit("CHATS:TYPING", obj);
    });
  });

  return io;
};
