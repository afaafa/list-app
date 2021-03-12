var express = require('express');
var mysql = require('mysql');
var db = require("./db_config");

var app = express();

app.get('/', (req, res) => {
  db.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});

app.listen(3000);