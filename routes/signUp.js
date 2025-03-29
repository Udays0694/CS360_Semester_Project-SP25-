const express = require('express');
const database = require('../database');

const signUpRouter = express.Router();

signUpRouter.post('/', (req, res) => {
    console.log("User Created");
    
    // const { first_name, last_name, city, state, address, zipcode, email, password } = req.body;
    // const query = `INSERT INTO users (first_name, last_name, city, state, address, zipcode, email, password) 
    //                VALUES ('${first_name}', '${last_name}', '${city}', '${state}', '${address}', '${zipcode}', '${email}', '${password}')`;
    // database.query(query, (err, results) => {
    //     if (err) throw err;
    //     res.redirect('/');
    // });
});

module.exports = signUpRouter;