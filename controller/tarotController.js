const express = require("express");

const router = express.Router();

// Import the model (tarot.js) to use its database functions.
const tarot = require("../models/tarot.js");

// this is the fisher yates algo for best shuffle

function shuffle (array) {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

// Create all our routes and set up logic within those routes where required.

// GET route for getting all of the tarot cards and rendering them to the db
router.get("/", function(req, res) {
    tarot.all(function(data){
        const hbsObject = {
            cards: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST Route for shuffling cards using the fisher yates algo
router.post("/", function(req, res) {
  tarot.all(function(data){
      shuffle(data)
      const hbsObject = {
          cards: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
  });
});

//POST Route for creating a new spread
router.post("/api/cards", function(req, res){
    tarot.create(["card_name "], [req.body.card_name], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    console.log("This post route is working");
});




// Export routes for server.js to use.
module.exports = router;