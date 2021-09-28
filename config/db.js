const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("connecting");
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongo DB Connected: " + `${conn.connection.host}`);
};

module.exports = connectDB;
