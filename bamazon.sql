-- Drop db if one already exists, creates the new db --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

-- Uses bamazon db and ensures all schemas attributed to it --
USE bamazon_db;

-- Creation of my products table --
CREATE TABLE products (
  item_id INT auto_increment NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lafeber's Nutriberries", "Pet Supplies", 26.99, 25),
  ("Almond Butter", "Grocery", 8.24, 50),
  ("Chickpea Pasta", "Grocery", 3.25, 2),
  ("Espresso Pods", "Grocery", 42.99, 50),
  ("Harry Potter Complete Film Collection Blu-Ray", "Movies and TV", 64.10, 30),
  ("Disney Pixar Coco", "Movies and TV", 19.99, 35),
  ("Harry Potter: The Illustrated Collection", "Books", 89.99, 20),
  ("Pride and Prejudice", "Books", 8.39, 200),
  ("Yoga Pants", "Clothing", 19.99, 100),
  ("Classic T-shirt", "Clothing", 13.49, 150);






