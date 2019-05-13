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
    choices: ["View Products for Sale", "View Low Inventory", "Add Products", "Add New Product"]

  }]).then(function (ans) {
    //console.log(ans);
    switch (ans.doThis) {
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

function viewProducts() {
  //   console.log("list")
  connection.query('SELECT * FROM Products', function (err, res) {
    if (err) throw err;
    console.log('----------------------------------------------------------------------------------------------------')

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
      console.log('--------------------------------------------------------------------------------------------------')
    }

    start();
  });
}
//views inventory lower than 5
function viewLowInventory() {
  console.log('>>>>>>Viewing Low Inventory<<<<<<');

  connection.query('SELECT * FROM Products', function (err, res) {
    if (err) throw err;
    console.log('----------------------------------------------------------------------------------------------------')

    for (var i = 0; i < res.length; i++) {
      if (res[i].StockQuantity <= 5) {
        console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
        console.log('--------------------------------------------------------------------------------------------------');
      }
    }

    start();
  });
}
//displays prompt to add more of an item to the store and asks how much
function addToInventory(){
  console.log('>>>>>>Adding to Inventory<<<<<<');

  connection.query('SELECT * FROM Products', function(err, res){
  if(err) throw err;
  var itemArray = [];
  //pushes each item into an itemArray
  for(var i=0; i<res.length; i++){
    itemArray.push(res[i].ProductName);
  }

  inquirer.prompt([{
    type: "list",
    name: "product",
    choices: itemArray,
    message: "Which item would you like to add inventory?"
  }, {
    type: "input",
    name: "qty",
    message: "How much would you like to add?",
    validate: function(value){
      if(isNaN(value) === false){return true;}
      else{return false;}
    }
    }]).then(function(ans){
      var currentQty;
      for(var i=0; i<res.length; i++){
        if(res[i].ProductName === ans.product){
          currentQty = res[i].StockQuantity;
        }
      }
      connection.query('UPDATE Products SET ? WHERE ?', [
        {StockQuantity: currentQty + parseInt(ans.qty)},
        {ProductName: ans.product}
        ], function(err, res){
          if(err) throw err;
          console.log('The quantity was updated.');
          start();
        });
      })
  });
}
