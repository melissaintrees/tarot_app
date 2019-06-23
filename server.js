require('dotenv').config();

var express = require('express');

var port = process.env.PORT || 9000;

var app = express();

app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controller/tarotController.js");

app.use(routes);

app.listen(port, function(){
    console.log("App now listening at localhost:" + port);
});