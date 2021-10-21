

const mysql = require("mysql");
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




    // connection.query('INSERT INTO products (ProductID,ProductName,UnitPrice ,UnitInStock ,CategoryID ,ProductImage,Description) Values (1,a,34,44,3,kk,eeeeedd));',((err,res)=>{console.log(err);console.log(res)}))

