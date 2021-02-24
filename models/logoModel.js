const mongoose = require('mongoose');

const logotipoSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  tipologia: String,
});

const Logotipo = mongoose.model('logotipos', logotipoSchema);

module.exports = Logotipo;
