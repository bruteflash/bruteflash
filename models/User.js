const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
fisrt_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
  ethereum:{
    type: String,
    default: "0.00"
  },
  polygon:{
    type: String,
    default: "0.00"
  },
  smartchain:{
    type: String,
    default: "0.00"
  },
  fantom:{
    type: String,
    default: "0.00"
  },
  arbitrum:{
    type: String,
    default: "0.00"
  },
  kcc:{
    type: String,
    default: "0.00"
  },
  tezos:{
    type: String,
    default: "0.00"
  },
  ton:{
    type: String,
    default: "0.00"
  },
  tron:{
    type: String,
    default: "0.00"
  },
  bitcoincash:{
    type: String,
    default: "0.00"
  },
  total:{
    type: String,
    default: "00.00"
  },
  software:{
    type: String,
    default: "Batch Flasher"
  },
  referalcode:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
