var express = require('express');
var mysql = require('mysql');
var router = express.Router();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "maze-game-project"
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    if(err) throw err;
    const sql = "SELECT * FROM mazes where id='1'";
    connection.query(sql, function(err, results) {
      if(err) throw err;
      console.log(results[0]);
      res.json(results[0]);
    })
  })
});

// maze/update
router.post('/update', function(req, res, next) {
  var id = req.query.id;

  pool.getConnection(function(err, connection) {
    if(err) throw err;
    const sql = `UPDATE mazes WHERE id=${id}`;
    connection.query(sql, function(err, results) {
      if(err) throw err;
      console.log(results[0]);
      res.json({success: true});
    })
  })
});

module.exports = router;
