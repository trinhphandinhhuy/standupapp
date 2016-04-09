var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req, res);
  next();
});

router.post('/', function (req, res) {
  return standupCtrl.filterByMember(req, res);
})

router.get('/newnote', function (req, res) {
  return standupCtrl.getNote(req, res);
});

router.post('/newnote', function (req, res) {
  return standupCtrl.create(req, res);
});

module.exports = router;
