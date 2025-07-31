const mysql = require('mysql2');
const { HOST, USER, PASSWORD, DATABASE } = process.env;

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = connection;