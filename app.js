const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', (req, res) => {
    const { first_name, last_name, city, state, address, zipcode, email, password } = req.body;
    const query = `INSERT INTO users (first_name, last_name, city, state, address, zipcode, email, password) 
                   VALUES ('${first_name}', '${last_name}', '${city}', '${state}', '${address}', '${zipcode}', '${email}', '${password}')`;
    database.query(query, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    database.query(query, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.redirect('/home');
        } else {
            res.send('Invalid login credentials');
        }
    });
});

app.get('/home', (req, res) => {
    res.send('Login successful');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});