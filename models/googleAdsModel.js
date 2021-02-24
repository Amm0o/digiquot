const mongoose = require('mongoose');

const googleAdsSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  countries: Number,
  management: String,
  reports: String,
});

const googleAds = mongoose.model('googleads', googleAdsSchema);

module.exports = googleAds;
