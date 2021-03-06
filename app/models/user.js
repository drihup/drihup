'use strict';
let mongoose = require('mongoose');

let User = mongoose.model('User', mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
}));


module.exports = User;
