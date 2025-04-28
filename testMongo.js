// filepath: c:\Users\Moon\Documents\Bots\MusicBot\testMongo.js
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URL;

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connection successful!");
    process.exit(0); // Exit the script
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with an error
  });