const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host:"sql4.freemysqlhosting.net",
        database:"sql4445753",
        user:"sql4445753",
        password:"9TVMUz3HrW",
        port: 3306

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
