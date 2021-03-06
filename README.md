# BAmazon- 
https://estomm01.github.io/BAmazon-
## Description

This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.

## MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the [MySQL](https://dev.mysql.com/doc/refman/5.6/en/installing.html) page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in [Bamazon.sql](https://github.com/estomm01/BAmazon-/blob/master/bamazon.sql). Run this code inside your terminal, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

## Built With
* [MySQL](https://www.mysql.com/) - The web framework used
* [NPM MySql](https://www.npmjs.com/package/mysql/) - Dependency Management
* [Node.js](https://nodejs.org/en/) - Used to generate RSS Feeds

## Authors

* **Markus Maasikas** - *Initial work* - [Estomm01](https://github.com/estomm01/BAmazon-)
