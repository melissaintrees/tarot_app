var express = require("express");

var router = express.Router();

// Import the model (tarot.js) to use its database functions.
var tarot = require("../models/tarot.js");

console.log("tarot from the model: ", tarot);

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    tarot.all(function(data){
        var hbsObject = {
            cards: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    console.log("this get route is working");
});


// Export routes for server.js to use.
module.exports = router;