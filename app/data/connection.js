const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friendsdb"
});

module.exports = connection;