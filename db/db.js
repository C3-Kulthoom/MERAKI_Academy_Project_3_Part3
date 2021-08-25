const mongoose = require("mongoose");
require("dotenv").config();
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, options).then(
() => {
    console.log("DB ... connected ");
  },
  (err) => {
    console.log(err);
  }
);


module.exports = mongoose