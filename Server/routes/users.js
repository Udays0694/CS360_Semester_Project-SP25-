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
        if (err){ 
            throw err;
        }
        //res.redirect('http://localhost:3000/');
    });

    //res.redirect('http://localhost:3000/');
    console.log("User Created");
    res.json(req.body);
});

//route for creating a user group (unfinished)
router.post('/createUserGroup', (req, res) =>{
    const {group_name} = req.body;
    const query = `INSERT INTO user_group (group_name) VALUES ('${group_name}')`;


    database.query(query, (err, results) => {
        if (err) {
            throw err;
            console.log("Error Creating UserGroup");
        }
        //res.redirect('/');
    });

    console.log("UserGroup created");
    res.json(req.body);

});

//route to log in a user
router.post('/userLogin', (req, res) => {
    console.log("User Login Access");
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    database.query(query, (err, results) => {
        if (err){ 
            throw err;
        }
        if (results.length > 0) {
            res.redirect('/home');
        } else {
            res.send('Invalid login credentials');
        }
    });
});

router.put('/userUpdateAddress', (req, res)=>{
    console.log("User Update Address Route");

    const {user_id, city, state, address, zip_code} = req.body;
    const queryUserUpd = `UPDATE users
                          SET city = '${city}', state = '${state}', address = '${address}', zip_code = '${zip_code}'
                          WHERE user_id = '${user_id}'`;

    database.query(queryUserUpd, (err, results)=>{
        if(err){
            throw err;
            console.log("Error Updating User Address");
        }else{
            console.log(results);
            console.log("User Address Changed");
        }
    });

    res.json(req.body);
});

router.put('/userUpdateEmail', (req, res)=>{
    console.log("User Update Email Route");

    const {user_id, email} = req.body;
    const queryUserUpd = `UPDATE users
                          SET email = '${email}'
                          WHERE user_id = '${user_id}'`;

    database.query(queryUserUpd, (err, results)=>{
        if(err){
            throw err;
            console.log("Error Updating User Email");
        }else{
            console.log(results);
            console.log("User Email Changed");
        }
    });

    res.json(req.body);
});

router.put('/userUpdateUserGroup', (req, res)=>{
    console.log("User Update UserGroup Route");

    const {user_id, group_id} = req.body;
    const queryUserUpd = `UPDATE users
                          SET group_id = '${group_id}'
                          WHERE user_id = '${user_id}'`;

    database.query(queryUserUpd, (err, results)=>{
        if(err){
            throw err;
            console.log("Error Updating UserGroup");
        }else{
            console.log(results);
            console.log("User added to UserGroup");
        }
    });

    res.json(req.body);
});

module.exports = router;