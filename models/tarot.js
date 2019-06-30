// Import the ORM to create functions that will interact with the database.
const orm = require("../configuration/orm.js");

const tarot = {
    all: function(cb) {
        orm.all("cards", function(res) {
            cb(res);
        });
    },
    findOne: function(cb) {
        orm.findOne("cards", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("cards", cols, vals, function(res){
            cb(res);
        })
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = tarot;