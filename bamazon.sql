DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id int NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL, 
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(10) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "electronics", 599.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("sofa", "furniture", 699.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("sunglasses", "clothing", 29.99, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter 1", "books", 29.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jaws", "electronics", 19.99, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("lamp", "furniture", 12.50, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Nikes", "clothing", 61.49, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mac", "electronics", 2000.00, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hat", "clothing", 15, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("TV", "electronics", 1500, 8);