const express = require('express');
const database = require('../database');

const router = express.Router();

//used for "http://localhost:5000/listings" 
router.get('/', (req, res) =>{
    res.send("Listings Router");

});

//route to display listings on listings page
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

//displays a single listing of a specific listing_id
router.get('/displayListing/:listing_id', (req, res)=>{
    const queryListings3 = `SELECT * FROM listings 
                            WHERE listing_id = ${req.params.listing_id}`;

    database.query(queryListings3, (err, results) => {
        if(err){
            console.log("Problem fetching listing from database");
            throw err;
        }else{
            console.log(results);
            //res.render("http://localhost:3000/listings", {title:'listings_data', action:'list', listings_data:results });
        }
                        
    });
                        
    res.json(req.body);

});

//route to create a new listing in the database
router.post('/createListing', (req, res) =>{
    const { listing_name, listing_desc, num_of_item, value_per_item } = req.body;

    if(num_of_item <= 1){
        //res.redirect('http://localhost:3000/');
        throw err;
        console.log("Too few items");
    }

    const queryListings = `INSERT INTO listings (listing_name, listing_desc, num_of_item, value_per_item) 
                           VALUES ('${listing_name}', '${listing_desc}', '${num_of_item}', '${value_per_item}')`;

    database.query(queryListings, (err, results) => {
        if (err) throw err;
        //res.redirect('http://localhost:3000/');
    });

    console.log("New Listing Created");
    res.json(req.body);
});

//creates route export
module.exports = router;