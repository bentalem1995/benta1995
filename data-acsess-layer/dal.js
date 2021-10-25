const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host:process.env.HOST,
        database:process.env.DATABASE,
        user: process.env.USER,
        password:process.env.PASSWORD,
        port:3306

    });
connection.connect((err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log("connection success");
    }
});



function executeAsync(qry, values) {
    return new Promise((resolve, reject) => {
        connection.query(qry, values, ((err, table) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve(table);
            }
        }));
    });
}

module.exports ={executeAsync};
