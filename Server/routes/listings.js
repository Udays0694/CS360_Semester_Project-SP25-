const express = require('express');
const database = require('../database');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Listings Router");

});

router.get('/displayListings', (req, res) =>{
    
    console.log("Error: displayListings Route not finalized");

});

router.post('/createListing', (req, res) =>{
    const { listing_name, listing_desc, num_of_item, value_per_item } = req.body;

    const queryListings = `INSERT INTO listings (listing_name, listing_desc, num_of_item, value_per_item) 
                           VALUES ('${listing_name}', '${listing_desc}', '${num_of_item}', '${value_per_item}')`;

    database.query(queryListings, (err, results) => {
        if (err) throw err;
        //res.redirect('/');
    });

    console.log("New Listing Created");
    res.json(req.body);
});

module.exports = router;