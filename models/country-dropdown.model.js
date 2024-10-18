const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
  name: String,
  value: String,
});

module.exports = mongoose.model("Country", countrySchema);
