const mysql = require('mysql2');

const database = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'root',
    password: '',
    database: '360db'
});

database.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
});

module.exports = database;