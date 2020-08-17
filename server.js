const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
require("dotenv").config();
const mongoose = require("mongoose");

// Connect Routes To App
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const ChatCtrl = require("./routes/api/chat");
const MessageCtrl = require("./routes/api/message");

// Import Sockets
const { createSocket } = require("./socket");

// Initialize App
const app = express();
const server = require("http").Server(app);
const io = createSocket(server);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB Successfully!");
  })
  .catch((err) => console.log(`Error: ${err}`));

// Middlewares App
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const ChatController = new ChatCtrl(io);
const MessageController = new MessageCtrl(io);

app.get(
  "/api/chats",
  passport.authenticate("jwt", { session: false }),
  ChatController.index
);
app.delete(
  "/api/chats/:id",
  passport.authenticate("jwt", { session: false }),
  ChatController.delete
);
app.post(
  "/api/chats",
  passport.authenticate("jwt", { session: false }),
  ChatController.create
);

app.get(
  "/api/messages",
  passport.authenticate("jwt", { session: false }),
  MessageController.index
);
app.post(
  "/api/messages",
  passport.authenticate("jwt", { session: false }),
  MessageController.create
);
app.delete(
  "/api/messages",
  passport.authenticate("jwt", { session: false }),
  MessageController.delete
);

// Connect to Server and Initialize port
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
