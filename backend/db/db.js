const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/remotr"; // KIV - depending on uri of DB

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB connection error");
    console.log(error);
    process.exitCode(1);
  }
};

module.exports = connectDB;
