const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Connect Routes To App
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const category = require("./routes/api/category");
const city = require("./routes/api/city");
const chat = require("./routes/api/messages");

// Import Sockets

// Initialize App
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);

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
app.use(cors());

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io;
  next();
});

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/category", category);
app.use("/api/city", city);
app.use("/api/chat", chat);

// Connected cors
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// Connect to Server and Initialize port
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
