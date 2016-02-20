var mongoose = require("mongoose");


var userSchema = new mongoose.Schema({
  local: {
    contest1_name: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    country: {type: String},
    email: {type: String},
    birth_day: {type: Number},
    birth_month: {type: Number},
    birth_year: {type: Number},
    privacy_check: {type: Boolean}
  }
})