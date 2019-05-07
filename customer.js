//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
//create connection to db
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
  //prints the items for sale and their details
  connection.query('SELECT * FROM Products', function (err, res) {

    if (err) throw err;

    console.log('Welcome to BAMazon')
    console.log('----------------------------------------------------------------------------------------------------')

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
      console.log('--------------------------------------------------------------------------------------------------')
    }

    askBuy();

  });

};
function askBuy() {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "what product ID would you like to purchase?",

      validate: function (value) {
        if (isNaN(value) === false) {
          return true;

        } else {

          return false;
        }
      }
    },
    {
      type: "input",
      name: "qty",
      message: "How many would you like to purchase?",

      validate: function (value) {
        if (isNaN(value) === false) {
          return true;

        } else {

          return false;
        }
      }
    }

  ]).then(function (answer) {
    let whatToBuy = answer.id;
    let howManyToPurchase = answer.qty;
    connection.query('SELECT * FROM Products WHERE ?', { itemID: whatToBuy },
      function (err, result) {
        if (err) throw err;
        // console.log(result);
        let total = parseFloat(result[0].Price * howManyToPurchase);

        if (result[0].StockQuantity >= howManyToPurchase) {

          connection.query(
            "UPDATE Products SET ? WHERE ?",
            [
              {
                StockQuantity: result[0].StockQuantity - howManyToPurchase
              },
              {
                itemId: answer.id
              }
            ],
            function (err, result) {
              if (err) console.log(err)
              //console.log(result);
              console.log("success! Your total is $" + total + ". Your items will be shipped shortly.")
              connection.end();
            }
          )

        } else {
          console.log("Sorry, this item is no longer available");
          connection.end();
        }


      });


  });
};

// //   //   if enough, run
// //   //   'update products set qty=qty-3 where id = 6'
// //   //   else
// //   //   display insufficent quantity
// //   differentFunction();
// // }
// // function differentFunction()
