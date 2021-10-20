const { json } = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host: config.mysql.host,
        database: config.mysql.database,
        user: config.mysql.user,
        password: config.mysql.password,

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
