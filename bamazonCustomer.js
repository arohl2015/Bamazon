// Dependencies for required npm packages to run data in terminal
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var color = require("cli-color");
// my password for mysql db connection - hidden
var pw = require("./pw.js"); 

// creating the connection to mysql
var connection = connection.mysql({

    host: "local host",
    port: 3306,
    user: "root",
    password: pw.pw,
    database: "bamazon"

});

// Creates the connection information for the sql database
connection.connect(function(error){
    if (error) throw error;
// Test console.log to check connection
    console.log("connected as id " + connection.threadId + "\n");
// run the function below after the connection is made to prompt the user to search store
showProducts();
});

function showProducts() {
    connection.query("SELECT * FROM products", function(error, res) {
      if (error) throw error;
      // Draw the table in the terminal using the response
    console.table(res);
    // Then prompt the customer for their choice of product, pass all the products to function promptCustomer
    promptCustomer(res);
  });