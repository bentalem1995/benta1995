const mysql = require("mysql");
const connection = mysql.createConnection(
    {
       
    });
connection.connect((err) => {
    if (err) {
        // console.error("can not connect to database");
        console.log(err);
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
