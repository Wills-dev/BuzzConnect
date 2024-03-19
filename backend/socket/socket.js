import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};
// {
//   userId: socketId;
// }

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  //accessing id  of user that is logged in
  const userId = socket.handshake.query.userId;

  if (userId != "undefined" || !userId) userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //socket.on() is used to listen to the events. cann be used both on client and server side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId],
      //io.emit() is used to send events to all the connected clients
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
