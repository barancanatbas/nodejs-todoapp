const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'newdb',
});

module.exports = pool;