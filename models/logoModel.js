const mongoose = require('mongoose');

const logotipoSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  tipologia: String,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
});

const Logotipo = mongoose.model('logotipos', logotipoSchema);

module.exports = Logotipo;
