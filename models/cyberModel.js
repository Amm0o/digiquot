const mongoose = require('mongoose');

const cyberSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  secCert: String,
  pentesting: String,
  renew: String,
  simulate: String,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
});

const cyber = mongoose.model('cyber', cyberSchema);

module.exports = cyber;
