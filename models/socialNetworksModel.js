const mongoose = require('mongoose');

const socialNetworksSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  socialNetworks: Number,
  posts: Number,
  interaction: String,
  publicityManagment: String,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
  priceAgency: String,
  priceFree: String,
  sentTo: [String],
});

const socialNetworks = mongoose.model('socialnetworks', socialNetworksSchema);

module.exports = socialNetworks;
