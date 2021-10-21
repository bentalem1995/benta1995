

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
function creatTables(){
connection.query('CREATE TABLE products (ProductID int,ProductName varchar(50),UnitPrice decimal UnitInStock int,CategoryID int,ProductImage varchar(200),Description varchar(200)))')
connection.query('CREATE TABLE login (UserID int, UserName varchar(50),PassWord varchar(1000),Email varchar(50))')
connection.query('CREATE TABLE forum (ForumID int ,UserName varchar(50),UserText varchar(200),Title varchar(50))' ,(err,res)=>
{console.log(err)})
}
module.exports ={creatTables}