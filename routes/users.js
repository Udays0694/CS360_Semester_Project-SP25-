const express = require('express');
const database = require('../database');

const router = express.Router();

router.get("/signUp", (req, res) => {
    console.log('signUp.ejs loaded successfully');
    res.render('users/signUp');
});

router.get("/logIn", (req, res) => {
    console.log('login.ejs loaded successfully');
    res.render('users/login');
});

// router.post('/',)

router.post('/userSignUp', (req, res) => {
    console.log("User Created");
    
    const { first_name, last_name, city, state, address, zip_code, email, password } = req.body;
    const query = `INSERT INTO users (first_name, last_name, city, state, address, zip_code, email, password) 
                   VALUES ('${first_name}', '${last_name}', '${city}', '${state}', '${address}', '${zip_code}', '${email}', '${password}')`;
    database.query(query, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

router.post('/login', (req, res) => {

    // const { email, password } = req.body;
    // const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    // database.query(query, (err, results) => {
    //     if (err) throw err;
    //     if (results.length > 0) {
    //         res.redirect('/home');
    //     } else {
    //         res.send('Invalid login credentials');
    //     }
    // });
});

module.exports = router;