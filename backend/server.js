const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./router/users");
const workJournal = require("./router/journalEntry");
const whiteFlags = require("./router/whiteFlags");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Remotr Welcome and Login page");
});

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
  expires: 1000,
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

// Creating sessions
app.use(
  session({
    name: "TEST_SESSION",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: store,
    cookie: {
      sameSite: false,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

//this /users is cumulative - eg users/create, users/login, /users/delete
app.use("/users", users);
app.use("/workJournal", workJournal);
app.use("/whiteFlags", whiteFlags);

// seed data //

const seed = require("./models/seed.js");
const Users = require("./models/Users");
// const User = require('./models/users.js');

app.get("/seedData", async (req, res) => {
  await Users.deleteMany({});
  // encrypts the given seed passwords
  await seed.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  // seeds the data
  await Users.create(seed, (err, createdUsers) => {
    // logs created users
    console.log(createdUsers);
    // redirects to index
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
