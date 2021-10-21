

const mysql = require("mysql");
const { getProductSales } = require("../bussines-logic/productLogic");
const connection = mysql.createConnection(
    {
        host:'sql4.freemysqlhosting.net',
        port: 3306,
        database:'sql4445753',
        user:'sql4445753',
        password:'9TVMUz3HrW',

    });
    connection.connect((err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("connection success on new mysql");
        }
    });

// connection.query('CREATE TABLE products(ProductID int NOT NULL PRIMARY KEY ,ProductName varchar(50),UnitPrice decimal,UnitsInStock int,Description varchar(200),ProductImage varchar(200),CategoryID int )');
// connection.query('DROP TABLE products')
// connection.query('INSERT INTO products (ProductName,UnitPrice,UnitsInStock,Description) Values ("בננה",20,40,"מוצר טוב")')

