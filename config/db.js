const mongoose = require("mongoose");

const mongo_URI = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_URI);

    console.log("Connected successfully");
  } catch (error) {
    console.log("Error in connection", error);
  }
};

module.exports = connectDB;
