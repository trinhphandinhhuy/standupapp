var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: {
    type : Date,
    default: Date.now
  }
});

// disabled ID

var noIdSchema = new Schema({
  name: String},{
  _id: false
});

module.exports = mongoose.model('Standup', standupSchema);
