//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Markus1572!!",
  database: "Bamazon"
})

function start(){
  //prints the items for sale and their details
  connection.query('SELECT * FROM Products', function(err, res){
    if(err) throw err;

    console.log('Welcome to BAMazon')
    console.log('----------------------------------------------------------------------------------------------------')

    for(var i = 0; i<res.length;i++){
      console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
      console.log('--------------------------------------------------------------------------------------------------')
    }

    // inquirer.prompt([
    //   type: "input",
    //   name: "id"
    //   message:

    //   validate: function(value) {
    //     if()

    //   }else{
    //     return false;
    //   }

    //type: "input",
    //   name: "qty",
        //  message: "How many would you like to purchase?",
    ])
