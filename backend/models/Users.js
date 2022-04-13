const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema(
  {
    userId: { type: String },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    position: { type: String },
    isManager: { type: Boolean, default: false },
    employees: [{ type: String }], //Stretch: to link the usernames of the employees to their managers who can see their work journals
    img: { type: String, default: "" },
    status: { type: String, default: "offline" },
    interactionCount: { type: Number },
    workJournal: [
      {
        author: { type: String },
        journalId: { type: String },
        date: { type: String },
        time: { type: String },
        title: { type: String },
        content: { type: String },
        private: { type: Boolean, default: true },
        comments: [
          {
            commentId: { type: String },
            username: { type: String },
            date: { type: String },
            time: { type: String },
            comment: { type: String },
          },
        ],
      },
    ],
    whiteFlag: [
      {
        whiteFlagId: { type: String },
        date: { type: String },
        time: { type: String },
        title: { type: String },
        content: { type: String },
        isSolved: { type: Boolean, default: false },
        comments: [
          {
            username: { type: String },
            date: { type: String },
            time: { type: String },
            comment: { type: String },
          },
        ],
      },
    ],
  },
  { collection: "Users" }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
