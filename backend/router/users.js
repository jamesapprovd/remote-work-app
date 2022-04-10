const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const router = express.Router();
const auth = require("../middleware/auth");
const { db } = require("../models/Users");

const usernameOrPasswordError = {
  status: "error",
  message: "username or password error",
};

router.get("/storeddata", async (req, res) => {
  const allData = await Users.find({}, {});
  res.json(allData);
});

router.post("/create", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    const createdUser = await Users.create(req.body);
    console.log("created user is: ", createdUser);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(401).json(usernameOrPasswordError);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: req.body.email });

  if (user === null) {
    console.log("user null");
    return res.status(401).send(usernameOrPasswordError);
  }

  const result = await bcrypt.compare(password, user.password);
  if (result) {
    req.session.currentUser = user.username;
    req.session.userId = user.userId;
    res.send({ status: "ok", message: "user logged in" });
  } else {
    req.session.currentUser = null;
    req.session.userId = null;
    res.status(401).send(usernameOrPasswordError);
  }
});

//auth for main page not working yet
router.get("/main", auth, (req, res) => {
  if (req.session.currentUser) {
    res.status(200).json({ status: "ok", message: "main" });
  } else {
    res.status(403).json({ status: "error", message: "please login" });
  }
});

//log out unable to figure out why its not deleting sessions
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ status: "ok", message: "logged out" });
  });
});

//authentication
// router.get("/profile", auth, (req, res) => {
//   if (req.session.currentUser) {
//     res.json({ status: "ok", message: "profile" });
//   } else {
//     res.status(403).json({ status: "error", message: "please login" });
//   }
// });

//^ i think this is not applicable?

router.delete("/remove", async (req, res) => {
  const { username } = req.body;
  const message = await Users.deleteOne({ username }); //deleting based on username

  if (message.deletedCount === 1) {
    res.json({ status: "ok", message: "user deleted" });
  } else {
    res.json({ status: "error", message: "problems with deleting user" });
  }
});

module.exports = router;
