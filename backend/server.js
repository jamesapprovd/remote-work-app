const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./router/users");
const workJournal = require("./router/journalEntry");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Remotr Welcome and Login page");
});

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

// Creating sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: store,
  })
);

//this /users is cumulative - eg users/create, users/login, /users/delete
app.use("/users", users);
app.use("/workJournal", workJournal);

// seed data //

// const seed = require("./models/seed.js");
// const Users = require("./models/Users");
// // const User = require('./models/users.js');

// app.get("/seedData", async (req, res) => {
//   await Users.deleteMany({});
//   // encrypts the given seed passwords
//   await seed.forEach((user) => {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
//   });
//   // seeds the data
//   await Users.create(seed, (err, createdUsers) => {
//     // logs created users
//     console.log(createdUsers);
//     // redirects to index
//     res.redirect("/");
//   });
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
