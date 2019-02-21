var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var content = fs.readFileSync('public/data/mazeeg.json');
  var maze = JSON.parse(content);
  res.json(maze);
});

module.exports = router;
