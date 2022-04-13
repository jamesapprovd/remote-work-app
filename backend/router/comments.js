const express = require("express");
const Users = require("../models/Users");
const commentsRouter = express.Router();

commentsRouter.get("/test", (req, res) => {
  res.json("comment router working");
});

commentsRouter.post("/new", async (req, res) => {
  const newComment = await Users.findOneAndUpdate(
    { workJournal: { $elemMatch: { journalId: req.body.selectedJournalId } } },
    { $push: { "workJournal.$.comments": req.body.newComment } },
    { new: true }
  );
  console.log(newComment);

  res.json({ status: "ok", message: " new comment created" });
});

module.exports = commentsRouter;
