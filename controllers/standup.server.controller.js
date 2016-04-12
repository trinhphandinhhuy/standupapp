
var Standup = require('../models/standup.server.model.js');
exports.list = function (req, res) {
  var query = Standup.find();

  query.sort({createdOn: 'desc'})
  .limit(12)
  .exec(function (err, results) {
    res.render('index', {title: 'Standup - List', notes: results});
  });
};

exports.create = function (req, res) {
  var entry = new Standup({
    memberName : req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });



  entry.save(function (err) {
    if(err){
      var errMsg = 'Sorry, there was an error saving the note.' + err;
      res.render('newnote', {title: 'Standup - New note (error)', message: errMsg});
    } else {
      console.log('The note was saved!');
      res.redirect(301, '/');
    }
  });
};

exports.getNote = function (req, res) {
  res.render('newnote', {title : 'Standup - New note'});
};

exports.filter = function (req, res) {
  var query = Standup.find();
  var filterName = req.body.memberName;
  var filterProject = req.body.project;

  query.sort({createdOn : 'desc'});

  if(filterName.length > 0){
    query.where({memberName: filterName});
  }

  if(filterProject.length > 0){
    query.where({project: filterProject});
  }

  query.exec(function (err, results) {
    res.render('index', {title: 'Standup - List', notes: results});
  });
};
