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
  console.log(req.body);
  const userUpdate = await Users.updateOne(
    { userId: req.body.userId },
    { $push: { workJournal: req.body.newJournal, $sort: { date: -1 } } }
    //to sort new entries in decending order based on date
  );
  console.log(userUpdate);
  res.json("Workjournal updated");
});

//User - All LOGGED IN user journal views (Public and Private)
journalRouter.get("/:title/all", async (req, res) => {
  const allJournalTitles = await Users.find({}, { workJournal: 1 });
  res.json(allJournalTitles);
});

//User - Only view Public journal views  // not working - why am i viewing everyone's private journals??
// journalRouter.get("/public", async (req, res) => {
//   const allJournalTitles = await Users.find({
//     workJournal: { $elemMatch: { private: false } },
//   });
//   res.json(allJournalTitles);
// });

//UPDATE JOURNAL ENTRY (WILL REPLACE ALL JOURNALS - USE WITH CAUTION!!!)
journalRouter.put("/new", async (req, res) => {
  // finds user by id (based on current logged in user )
  const userUpdate = await Users.updateOne(
    { _id: req.body.userId },
    { $set: { workJournal: req.body } }
  );
  res.json("Workjournal updated");
});

//DELETE A JOURNAL ENTRY

journalRouter.delete("/delete", async (req, res) => {
  const deleteJournalEntry = await Users.updateOne(
    { _id: req.session.userId },
    { $pull: { workJournal: req.body } }
  );
  console.log(deleteJournalEntry);
  res.json("Workjournal entry deleted");
});

module.exports = journalRouter;
