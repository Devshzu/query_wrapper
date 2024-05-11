const mysql = require("mysql2")

 exports.pool =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Karan@123",
    database: "employee",
    // port: 3306
});

 
