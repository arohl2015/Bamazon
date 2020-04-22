# Bamazon - Node.js and MYSQL

### Overview:
In this homework assignment, I created an Amazon-like storefront that is a command-line app that connects with MYSQL. The app takes in orders from customers (the user) and depletes stock from the store's inventory.

### Getting Started

#### These instructions will get a copy of the project running on your local machine:

1. Clone the repository
2. Run nmp install or npm i
3. Open MySQL Workbench, open the "bamazon.sql" script, and then run it to set up the database and data
4. Within the cloned repo, create a new pw.js file; this file is a dependency for my app to hide the password. If you don't require a password for your database, simply leave the pw property empty. Example for the pw.js file is:

var pwd = {
	pw: "YOUR PASSWORD HERE"
}
	
module.exports = pwd;

#### Go to npmjs if you want to know more about:

1. **mysql**:  https://www.npmjs.com/package/mysql
2. **inquirer**: https://www.npmjs.com/package/inquirer
3. **cli-color**: https://www.npmjs.com/package/cli-color
4. **console.table**: https://www.npmjs.com/package/console.table

### Running the App:
* Navigate to the root of game in your terminal
* Start the app by entering `node bamazoncustomer.js`
* The screen will give the user the option to either view the inventory or to leave the store:

![Default](/images/startbam.PNG)

* If the user chooses to "View Items for Sale", the following will display:

![Default](/images/viewitems.PNG)

* Otherwise, if the user chooses to "Leave Bamazon", the app will automatically terminate the connection:

![Default](/images/leavebam.PNG)

* If the user chooses to shop, the app will automatically ask the user what product they want to buy and how much. If the order is successful (enough in stock), it will display the total cost and thank them for their order:

![Default](/images/orderconfirm.PNG)

* If the user chooses no, the following message is displayed and ends the game:

![Default](/images/endgame.PNG)

* If the user guesses the word correctly, the following message will display and automatically show the next word to guess:

![Default](/images/correctguess.PNG)

### Technologies Used:
-	Javascript
-	Node.js
-	inquirer npm
-	cli-color npm