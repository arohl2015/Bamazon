-- Drop db if one already exists, creates the new db --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

-- Uses bamazon db and ensures all schemas attributed to it --
USE bamazon_db;

-- Creation of my products table --
CREATE TABLE products (
  item_id INT auto_increment NOT NULL,
  product_name VARCHAR(75) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);






