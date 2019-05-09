var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnecdtion({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Markus1572!!",
  database: "BamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  start()

});

function start() {
  inquirer.prompt([
    type: "list",
    name"doThis",
    message: "What would you like to do?",
    choices: ["View products for Sale", "View Low Inventory", "Add Products", "Add New Product" ]
  ])
}
