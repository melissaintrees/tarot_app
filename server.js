require('dotenv').config();

const express = require('express');

let port = process.env.PORT || 9000;

//intialize express in app var
const app = express();

app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.static('views')); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controller/tarotController.js");

app.use(routes);

app.listen(port, ()=> {
    console.log(`App now listening at http://localhost:${port}`)
})