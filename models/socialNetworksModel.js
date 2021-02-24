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
});

const socialNetworks = mongoose.model('socialnetworks', socialNetworksSchema);

module.exports = socialNetworks;
