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
  var id = req.query.id;

  pool.getConnection(function(err, connection) {
    if(err) throw err;
    const sql = `SELECT * FROM mazes where id='${id}'`;
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
  var x = req.body.x;
  var y = req.body.y;
  var name = req.body.name;
  var maze = req.body.maze;
  var initial_position = req.body.initial_position;
  var final_position = req.body.final_position;

  pool.getConnection(function(err, connection) {
    if(err) throw err;
    const sql = `UPDATE mazes SET x='${x}', y='${y}', name='${name}', maze='${maze}', initial_position='${initial_position}', final_position='${final_position}' WHERE id=${id}`;
    connection.query(sql, function(err, results) {
      if(err) throw err;
      console.log(results[0]);
      res.json({success: true});
    })
  })
});

module.exports = router;
