const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host:process.env.SQL_HOST,
        database:process.env.SQL_DATABASE,
        user:process.env.SQL_USER,
        password:process.env.SQL_PASSWORD,
        

    });
connection.connect((err) => {
    if (err) {
        console.error("could not connect to database");
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
