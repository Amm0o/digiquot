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
});

const agency = mongoose.model('agency', agencySchema);

module.exports = agency;
