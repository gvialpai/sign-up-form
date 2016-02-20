var mongoose = require("mongoose");


var userSchema = new mongoose.Schema({
  local: {
    contest1_name: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    country: {type: String},
    email: {type: String},
    birth_day: {type: String},
    birth_month: {type: String},
    birth_year: {type: String},
    privacy_check: {type: Boolean}
  }
})