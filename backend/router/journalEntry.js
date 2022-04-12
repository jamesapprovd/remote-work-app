const express = require("express");
const Users = require("../models/Users");
const journalRouter = express.Router();

//CREATE NEW ROUTE
journalRouter.get("/workjournal", (req, res) => {
  res.json("User workjournal");
});

// POST NEW JOURNAL (WORKS IN FRONTEND)
journalRouter.post("/new", async (req, res) => {
  // finds user by id (based on current logged in user )
  try {
    const userUpdate = await Users.updateOne(
      { userId: req.body.userId },
      { $push: { workJournal: req.body.newJournal, $sort: { date: -1 } } }
      //to sort new entries in decending order based on date
    );
    if (userUpdate.modifiedCount === 1) {
      res.json({ status: "ok", message: "new work journal added" });
    } else {
      res.json({ status: "error", message: "new work journal not added" });
    }
  } catch (error) {
    res.json({ status: "error", message: "connection error" });
  }
});

//User - All LOGGED IN user journal views (Public and Private)
journalRouter.get("/all", async (req, res) => {
  // const allJournals = await Users.find({}, { workJournal: 1, _id: 0 });
  // const allJournals = await Users.find({}, { "workJournal.journalId": 1 });
  const allJournals = await Users.aggregate([
    { $unwind: "$workJournal" },
    { $project: { workJournal: 1, _id: 0 } },
    { $sort: { "workJournal.date": -1, "workJournal.time": -1 } },
  ]);
  res.json(allJournals);
});

//User - Only view Public journal views  // not working - why am i viewing everyone's private journals??
// journalRouter.get("/public", async (req, res) => {
//   const allJournalTitles = await Users.find({
//     workJournal: { $elemMatch: { private: false } },
//   });
//   res.json(allJournalTitles);
// });

//UPDATE JOURNAL ENTRY (WORKS IN FRONTEND)
journalRouter.put("/edit", async (req, res) => {
  try {
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
    if (userUpdate.modifiedCount === 1) {
      res.json({ status: "ok", message: "work journal updated" });
    } else {
      res.json({ status: "error", message: "work journal not updated" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "connection error" });
  }
});

//DELETE A JOURNAL ENTRY (WORKS IN FRONTEND)
journalRouter.post("/delete", async (req, res) => {
  try {
    const deleteJournalEntry = await Users.updateOne(
      { userId: req.body.userId },
      { $pull: { workJournal: { journalId: req.body.journalId } } }
    );
    if (deleteJournalEntry.modifiedCount === 1) {
      res.json({ status: "ok", message: "work journal deleted" });
    } else {
      res.json({ status: "error", message: "work journal not deleted" });
    }
  } catch (error) {
    res.json({ status: "error", message: "connection error" });
  }
});

module.exports = journalRouter;
