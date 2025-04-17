const express = require('express');
const database = require('../database');

const router = express.Router();

//used for "http://localhost:5000/transactions" 
router.get('/', (req, res) =>{
    res.send("Transactions Router");

});

router.post('/createTransaction', (req, res)=>{
    console.log("Transactions route not finished");

});

module.exports = router;