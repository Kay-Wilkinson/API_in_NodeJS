var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mysql = require("mysql");
app.use(bodyParser.json());
// app.use(express.bodyParser());


//connect to shadows

var con = mysql.createConnection({
      "host": "shadowrpt.pop.imageinclude.com",
      "username": "techops",
      "password": "HeeshCash",
      "database": "CPC3"
      //"port": 3306
});
/*
var con = mysql.createConnection({
  "host": "shadowrpt-testing.spotx.den01.pop",
  "username": "cpc",
  "password": "r1che$",
  "database": "CPC3"
});
*/
/*
var con = mysql.createConnection({
  "host": "localhost",
  "user": "kwilkinson",
  "database": "tastyballendb"
})
*/
//connect to mongoose
//mongoose.connect("mongodb://localhost/app");
// var db = mongoose.connection
//need to put link to shadows in get();
app.post("/", function(req, res){
    console.log(req.body.publisher_id);
    console.log(req.body.date);
    res.send("Hello World");
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected to Shadows!");
        con.query("SELECT * FROM CPC3.AFFILIATE WHERE affiliate_id = 85394;", function(err, result){
                  if(err) throw err;
                  console.log(result);
                });
        //var result = //output of con.query as csv or js object
        //access custom fields data and regex values into hash map or kvp dictionary. Hierachical data
        //regex extract on cell to get the refinement_definition_option_id and replace with looked up versions of cpc3 object
        // create local database to test on with replica data

    });
});

app.listen(3000);
console.log('Running on port 3000...');
