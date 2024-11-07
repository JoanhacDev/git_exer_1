const mysql = require('mysql2/promise');

const conection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'joanhac',
    database: 'jefe'
});

module.exports = conection