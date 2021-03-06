//
// Module dependencies
//
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://localhost:27017/test');
var Admin       = require('./admin');
var LeagueSchema   = new Schema({
  title: String,
  description: String,
  rules: String,
  avatar: String,
  created: {type:Date, default:Date.now()},
  edited: {type:Date, default:Date.now()},
  eventDate: Date,
  admin:{
    type: Schema.ObjectId,
    ref: "Admin"
  }
});

module.exports = connection.model('League', LeagueSchema);
