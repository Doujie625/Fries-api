const mongoose = require('mongoose')

let mongoURI = ""
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://127.0.0.1:27017/fry-todo-api";

}

mongoose.connect(mongoURI)
module.exports = mongoose