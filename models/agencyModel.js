const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pt: Boolean,
  br: Boolean,
  uk: Boolean,
  au: Boolean,
  es: Boolean,
  pol: Boolean,
  usa: Boolean,
  uae: Boolean,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
});

const agency = mongoose.model('agency', agencySchema);

module.exports = agency;
