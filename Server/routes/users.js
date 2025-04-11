const express = require('express');
const database = require('../database');

const router = express.Router();

//used for "http://localhost:5000/users" 
router.get('/', (req, res) =>{
    res.send("Users Router");

});

router.get("/signUp", (req, res) => {
    console.log('signUp.ejs loaded successfully');
    res.render('users/signUp');
});

router.get("/logIn", (req, res) => {
    console.log('login.ejs loaded successfully');
    res.render('users/login');
});

// router.post('/',)

//route to create a new user in the database
router.post('/userSignUp', (req, res) => {
    
    const { first_name, last_name, city, state, address, zip_code, email, password } = req.body;
    const query = `INSERT INTO users (first_name, last_name, city, state, address, zip_code, email, password) 
                   VALUES ('${first_name}', '${last_name}', '${city}', '${state}', '${address}', '${zip_code}', '${email}', '${password}')`;

    database.query(query, (err, results) => {
        if (err) throw err;
        //res.redirect('http://localhost:3000/');
    });

    //res.redirect('http://localhost:3000/');
    console.log("User Created");
    res.json(req.body);
});

//route for creating a user group (unfinished)
router.post('/createUserGroup', (req, res) =>{
    const {} = req.body;
    const query = ``;

    database.query(query, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
    console.log("Error: createUserGroup route not finalized");
    res.json(req.body);

});

//route to log in a user
router.post('/userLogin', (req, res) => {
    console.log("User Login Access");
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

module.exports = router;