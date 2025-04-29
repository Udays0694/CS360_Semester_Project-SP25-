const express = require('express');
const database = require('../database');

const router = express.Router();

//used for "http://localhost:5000/admin" 
router.get('/', (req, res) =>{
    res.send("Admin Router");

});

//Admin Authentification Routes

router.get("/signUp", (req, res) => {
    console.log('signUp.ejs loaded successfully (Admin)');
    res.render('admin/signUp');
});

router.post('/adminSignUp', (req, res) => {
    
    const { admin_user, email, password } = req.body;
    const query = `INSERT INTO admins (admin_user, email, password) 
                   VALUES ('${admin_user}', '${email}', '${password}')`;

    database.query(query, (err, results) => {
        if (err){ 
            throw err;
        }
        
    });

    res.redirect('http://localhost:5000/admin/signUp.ejs');
    console.log("User Created");
    res.json(req.body);
});

router.get("/logIn", (req, res) => {
    console.log('login.ejs loaded successfully (Admin)');
    res.render('admin/login');
});

router.post('/adminLogin', (req, res) => {
    console.log("Admin Login Access");
    const { email, password } = req.body;
    const query = `SELECT * FROM admins WHERE email = '${email}' AND password = '${password}'`;

    database.query(query, (err, results) => {
        if (err){ 
            throw err;
        }
        if (results.length > 0) {
            res.redirect('http://localhost:5000');
        } else {
            res.send('Invalid login credentials');
        }
    });
});


//Listing Routes

router.get('/displayListings', (req, res) =>{

    //const { listing_name, listing_desc, num_of_item, value_per_item } = req.body;
    const queryListings2 = `SELECT * FROM listings`;

    database.query(queryListings2, (err, results) => {

        if(err){
            console.log("Problem fetching listings from database");
            throw err;
        }else{
            console.log(results);
            //res.render("http://localhost:3000/listings", {title:'listings_data', action:'list', listings_data:results });
        }

    });

    res.json(req.body);
    //console.log("Error: displayListings Route not finalized");

});

router.post('/deleteListing/:listing_id', (req, res)=>{

    const queryDelete = `DELETE FROM listings WHERE listing_id = '${req.params.listing_id}'`;

    database.query(queryDelete, (err, results)=>{

        if(err){
            throw err;
            console.log("Error Deleting Listing");
        }else{
            console.log("Item Successfully Deleted");
            //console.log(req.params.listing_id);
        }

    });

    res.json(req.body);

});

//User Routes

module.exports = router;