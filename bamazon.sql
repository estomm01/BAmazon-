DROP DATABASE IF EXISTS BamazonDB;
CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Electronics","ENTERTAINMENT", 50,50),
("WOW", "Entertainment", 50,50),
("Hoodie", "Clothing", 50,50),
("Cool Shaes", "Clothing", 25,25),
("Killer Klowns from Outer Space", "Entertainment", 75,75);

select * from Products;
