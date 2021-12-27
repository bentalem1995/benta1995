const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host:process.evn.HOST
        database:process.env.DATABASE
        user:process.env.USER
        password:process.env.PASSWORD
        port: process.env.PORT

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
