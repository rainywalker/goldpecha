const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  username : String,
  area : String,
  phone : String,
  car : String,
  since : String,
  car_num : String
});

module.exports = mongoose.model('Users', carSchema);
