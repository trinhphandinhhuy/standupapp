var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function (val) {
    return (val.length > 0 && val.toLocaleLowerCase() != 'none')
  }, 'Select valid member name.'
];

var requiredStringValidator = [
  function (val) {
      var testVal = val.trim();
      return (testVal.length > 0);
  }, '{PATH} cannot be empty'
];

var standupSchema = new Schema({
  memberName: {
    type: String,
    required: true,
    validate : memberNameValidator
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  impediment: {
    type: String,
    required: true,
    default: 'None'
  },
  createdOn: {
    type : Date,
    default: Date.now
  }
});

var userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  project: [{
    type: Schema.ObjectId,
    ref : 'Projects',
  }],
  workYesterday: {
    type: String,
    required: true,
  },
  workToday: {
    type: String,
    required: true,
  },
  impediment: {
    type: String,
    required: true,
    default: 'None'
  },
  createdOn: {
    type : Date,
    default: Date.now
  }
});

var projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  users: [{
    type: Schema.ObjectId,
    ref : 'Users',
  }]
});


module.exports = mongoose.model('Standup', standupSchema);
