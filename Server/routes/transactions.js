const express = require('express');
const database = require('../database');

const router = express.Router();

//used for "http://localhost:5000/transactions" 
router.get('/', (req, res) =>{
    res.send("Transactions Router");

});

router.post('/createTransaction', (req, res)=>{

    const {user_1_id, item_1_id, user_2_id, item_2_id, equivalence} = req.body;
    const queryCreateTrans = `INSERT INTO transactions (user_1_id, item_1_id, user_2_id, item_2_id, equivalence)
                   VALUES ('${user_1_id}', '${item_1_id}', '${user_2_id}', '${item_2_id}', '${equivalence}')`;
    //console.log("Transactions route not finished");

    database.query(queryCreateTrans, (err, results)=>{
        if(err){
            throw err;
            console.log("Error creating Transaction");
        }else{
            console.log("Transaction Created");
        }

    });

    
    res.json(req.body);

});

router.post('/deleteTransaction', (req, res)=>{

    const queryDelTrans = `DELETE FROM transactions WHERE transaction_id = '${req.params.transaction_id}'`;

    database.query(queryDelTrans, (err, results)=>{
        if(err){
            console.log("Problem deleting Transaction");
            throw err;
        }else{
            console.log("Transaction Deleted");
        }

    });

    res.json(req.body);
});

module.exports = router;