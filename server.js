const express = require("express");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const passport = require("passport");
// const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// Connect Routes To App
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

// Initialize App
const app = express();
// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB Successfully!"))
  .catch((err) => console.log(`Error: ${err}`));

// Middlewares App
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// cors
// if (process.env.MODE_ENV === "development") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);

// Connect to Server and Initialize port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
