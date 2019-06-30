// Import MySQL connection.
const connection = require("../config.js");

const orm = {
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb){
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES ('test')";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (tarot.js).
module.exports = orm;