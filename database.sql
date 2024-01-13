-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_list (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL NOT NULL,
	"unit" VARCHAR(20),
	"purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO shopping_list ("name", "quantity", "unit", "purchased")
VALUES ();

SELECT * FROM shopping_list;