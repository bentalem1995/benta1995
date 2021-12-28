const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host:process.env.SQL_HOST,
        database:process.env.SQL_DATABASE,
        user:process.env.SQL.USER,
        password:process.env.SQL.PASSWORD,
        

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
