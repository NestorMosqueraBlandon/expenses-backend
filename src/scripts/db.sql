CREATE DATABASE IF NOT EXISTS expensesdb;

USE expensesdb;

CREATE TABLE IF NOT EXISTS expenses(
    id INT NOT NULL AUTO_INCREMENT,
    amount FLOAT NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO expenses (amount, title, description) VALUES
    (50000, 'expense 1', 'gasto general'),
    (80000, 'expense 2', 'gasto general');