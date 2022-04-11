const express = require("express");
const Users = require("../models/Users");
const whiteFlagRouter = express.Router();

// create

whiteFlagRouter.post("/new", async (req, res) => {
  console.log(req.body);
  const newFlag = await Users.updateOne(
    { userId: req.body.userId },
    { $push: { whiteFlag: req.body.newFlag, $sort: { date: -1 } } }
  );
  console.log(newFlag);
  res.json({ status: "ok", message: " new White Flag created" });
});

// ^^ frontend data structure should like
/**
    {
        "userId": "1",
        "newFlag": {
            "whiteFlagId" : "1234",
            "date": "11/04/2022", 
            "time": "14:02:24", 
            "title": "asdad", 
            "content": "asdasd", 
            "isSolved": false,
            "comments": []
        }
    }
 */

// update //

whiteFlagRouter.put("/edit", async (req, res) => {
  const editFlag = await Users.findOneAndUpdate(
    { whiteFlagId: req.body.whiteFlagId },
    {
      $set: { whiteFlag: req.body.editedWhiteFlag },
    }
  );
  console.log(editFlag);
  res.json({ status: "ok", message: "White Flag edited" });
});
/**
{
    "whiteFlagId" : "12345", 
    "editedWhiteFlag":{
        "whiteFlagId" : "12345",
        "date": "11/04/2022", 
        "time": "14:02:24", 
        "title": "test234", 
        "content": "test234", 
        "isSolved": false,
        "comments": []
    }
}
 */
// delete //

whiteFlagRouter.put("/edit", async (req, res) => {
  const editFlag = await Users.findOneAndUpdate(
    { whiteFlagId: req.body.whiteFlagId },
    {
      $set: { whiteFlag: req.body.editedWhiteFlag },
    }
  );
  console.log(editFlag);
  res.json({ status: "ok", message: "White Flag edited" });
});

module.exports = whiteFlagRouter;
