// Dependencies for required npm packages to run data in terminal
var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

// creating the connection to mysql
var connection = connection.mysql({

    host: "local host",
    port: 3306,
    user: "root",
    password: ""
    database: "bamazon"

});

// creating connection to the database
connection.connect(function(error){
	if (error) throw error;