const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema(
  {
    userId: { type: String },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    isManager: { type: Boolean, default: false },
    img: { type: String, default: "" }, //add generic image
    status: { type: String },
    interactionCount: { type: Number },
    workJournal: [
      {
        date: { type: Date },
        time: { type: Date, default: Date.now }, //Apparently, if you save a document with an unset time field, Mongoose will fill in this field with the current time
        title: { type: String },
        content: { type: String },
        private: { type: Boolean },
        comments: [
          {
            _id: { type: String },
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
