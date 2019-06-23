// Import the ORM to create functions that will interact with the database.
var orm = require("../configuration/orm.js");

var tarot = {
    all: function(cb) {
        orm.all("cards", function(res) {
            cb(res);
        });
    },
    wands: "4"
};

// Export the database functions for the controller (catsController.js).
module.exports = tarot;