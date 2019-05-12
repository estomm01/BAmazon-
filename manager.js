var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
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
  inquirer.prompt([{
    type: "list",
    name: "doThis",
    message: "What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory", "Add Products", "Add New Product" ]

}]).then(function(ans){
  console.log(ans);
  switch(ans.doThis){
    case "View Products for Sale": viewProducts();
    break;
    case "View Low Inventory": viewLowInventory();
    break;
    case "Add to Inventory": addToInventory();
    break;
    case "Add New Product": addNewProduct();
    break;
    case "End Session": console.log('See Ya!');
  }
});

};

function viewProducts(){
  console.log("list")
};
