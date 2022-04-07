const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./router/users");

const app = express();

require("dotenv").config();

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: store,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

//this /users is cumulative - eg users/create, users/login, /users/delete
app.use("/users", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
