const express = require("express");
const Users = require("../models/Users");
const journalRouter = express.Router();

//CREATE NEW ROUTE
journalRouter.get("/workjournal", (req, res) => {
  res.json("User workjournal");
});

// POST NEW JOURNAL (WORKS)
journalRouter.post("/new", async (req, res) => {
  // finds user by id (based on current logged in user )
  const userUpdate = await Users.updateOne(
    { userId: req.body.userId },
    { $push: { workJournal: req.body.newJournal, $sort: { date: -1 } } }
    //to sort new entries in decending order based on date
  );
  console.log(userUpdate);
  res.json({ status: "ok", message: "added new work journal" });
});

//User - All LOGGED IN user journal views (Public and Private)
journalRouter.get("/all", async (req, res) => {
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

//UPDATE JOURNAL ENTRY (WORKS)
journalRouter.put("/edit", async (req, res) => {
  // finds user by id (based on current logged in user )
  const userUpdate = await Users.updateOne(
    { userId: req.body.userId, "workJournal.journalId": req.body.journalId },
    {
      $set: {
        "workJournal.$.content": req.body.update.content,
        "workJournal.$.title": req.body.update.title,
        "workJournal.$.date": req.body.update.date,
        "workJournal.$.time": req.body.update.time,
      },
    }
  );
  console.log(userUpdate);
  res.json("Workjournal updated");
});

//DELETE A JOURNAL ENTRY (WORKS)
journalRouter.post("/delete", async (req, res) => {
  const deleteJournalEntry = await Users.updateOne(
    { userId: req.body.userId },
    { $pull: { workJournal: { journalId: req.body.journalId } } }
  );
  console.log(deleteJournalEntry);
  res.json({ status: "ok", message: "journal deleted" });
});

module.exports = journalRouter;
