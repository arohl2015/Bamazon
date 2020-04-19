// Dependencies for required npm packages to run data in terminal
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var color = require("cli-color");
// my password for mysql db connection - hidden
var pw = require("./pw.js");

// creating the connection to mysql
var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: pw.pw,
    database: "bamazon_db"

});

// Creates the connection information for the sql database
connection.connect(function (error) {
    if (error) throw error;
    // Test console.log to check connection
    console.log("connected as id " + connection.threadId + "\n");
    // run the function below after the connection is made to make a choice to view products or exit
    start();
});

function start() {
    // ask customer what they'd like to do
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["View products for sale", "Leave Bamazon"],
            message: "Please select what you would like to do:"
        }
    ]).then(function (action) {
        // if user wants to view products, run the showProducts function
        if (action.action === "View products for sale") {
            showProducts();
            // if user wants to leave, run exit function
        } else if (action.action === "Leave the store") {
            exit();
        }
    });
}

function showProducts() {
    // query the database for all items being sold
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) throw error;
        // Draw the table in the terminal using the response
        console.table(results);
        // Then prompt the customer for their choice of product, pass all the products to function promptCustomer
        promptCustomer();
    });

    function promptCustomer() {
        // ask customer what they'd like to buy and how many
        inquirer.prompt([
            {
                name: "item_id",
                type: "input",
                message: "Please enter the ID of the item that you would like to purchase:",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "userOrder",
                message: "Please enter the quantity you would like to purchase:",
                type: "input",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
            // check if your store has enough of the product to meet the customer's request.
            //If not, the app should log a phrase like `Insufficient quantity!`,and then prevent the order from going through.
        ]).then(function (transact) {



            // if store has enough of the product, fulfill the customer's order.
            // update the SQL database to reflect the remaining quantity.
            // once the update goes through, show the customer the total cost of their purchase.
         


        }

        )
    }