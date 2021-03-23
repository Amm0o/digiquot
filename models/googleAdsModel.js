const mongoose = require('mongoose');

const googleAdsSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  countries: Number,
  management: String,
  reports: String,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
});

const googleAds = mongoose.model('googleads', googleAdsSchema);

module.exports = googleAds;
