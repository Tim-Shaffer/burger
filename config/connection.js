// =============================================================
// Used Activity 16 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
var mysql = require("mysql");

// code to read and set any environment variables with the .env package 
require("dotenv").config();

// create a connection variable to be able to use the JAWSDB setup with Heroku 
var connection;

// check if the environment is using HEROKU setups
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
};

// use the connection object connect method to complete a connection to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return; 
//   }
//   console.log("connected as id " + connection.threadId);
// });

// use the connection object connect method to complete a connection to the database
connection.connect();

// export the connection object to be available for use by other files
module.exports = connection;