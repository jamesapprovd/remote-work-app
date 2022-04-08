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
    employees: [{ type: String }], //TODO: to link the usernames of the employees to their managers who can see their work journals
    img: { type: String, default: "" }, //add generic image
    status: { type: String, default: "offline" },
    interactionCount: { type: Number },
    workJournal: [
      {
        date: { type: Date },
        time: { type: Date, default: Date.now }, //Apparently, if you save a document with an unset time field, Mongoose will fill in this field with the current time
        title: { type: String },
        content: { type: String },
        private: { type: Boolean, default: true },
        comments: [
          {
            username: { type: String },
            date: { type: Date },
            time: { type: Number },
            comment: { type: String },
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: { type: Date },
        time: { type: Date, default: Date.now },
        title: { type: String },
        content: { type: String },
        isSolved: { type: Boolean, default: false },
        comments: [
          {
            username: { type: String },
            date: { type: Date },
            time: { type: Date, default: Date.now },
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
