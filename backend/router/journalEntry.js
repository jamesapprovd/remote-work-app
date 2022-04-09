const e = require("express");
const express = require("express");
const Users = require("../models/Users");
const journalRouter = express.Router();

//CREATE NEW ROUTE
journalRouter.get("/workjournal", (req, res) => {
  res.json("User workjournal");
});

// Post a new workJournal
journalRouter.post("/new", async (req, res) => {
  // finds user by id (based on current logged in user )
  const userUpdate = await Users.updateOne(
    { _id: req.session.userId },
    { $push: { workJournal: req.body } }
  );
  res.json("Workjournal updated");
});

//UPDATE JOURNAL ENTRY (WILL REPLACE ALL JOURNALS - USE WITH CAUTION!!!)
journalRouter.put("/new", async (req, res) => {
  // finds user by id (based on current logged in user )
  const userUpdate = await Users.updateOne(
    { _id: req.session.userId },
    { $set: { workJournal: req.body } }
  );
  res.json("Workjournal updated");
});

//CREATE A DELETE ROUTE
// journalRouter.delete("users/journal/:id", (req, res) => {
//   res.send("deleting....");
// });

//DELETE A JOURNAL ENTRY

// app.delete("users/journal/:id", (req, res) => {
//   Users.workJournal.findOneAndUpdate({}, req.body)
// }

module.exports = journalRouter;
