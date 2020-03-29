// =============================================================
// Used Activity 16 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
var mysql = require("mysql");

// instantiate a new connection object to the mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "education",
    password: "password",
    database: "burgers_db"
  });

// use the connection object connect method to complete a connection to the database
connection.connect(function(err) {

  if (err) {
  
    console.error("error connecting: " + err.stack);
    return;
  
  }
  
  console.log("connected as id " + connection.threadId);
  
});

// export the connection object to be available for use by other files
module.exports = connection;