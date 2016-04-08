var Standup = require('../models/standup.server.model.js');

exports.create = function (req, res) {
  var entry = new Standup({
    memberName : req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    wordToday: req.body.workToday,
    impediment: req.body.impediment
  });
};
