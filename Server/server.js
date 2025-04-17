const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

//Server Routers

app.use(bodyParser.urlencoded({ extended: false })); 
    app.get('/', (req, res) => { 
    console.log('index.ejs loaded successfully');
    res.render('index.ejs');

})

const userRouter = require("./routes/users.js");
const listingsRouter = require("./routes/listings.js");
const transactionsRouter = require("./routes/transactions.js");

app.use("/users", userRouter);
app.use("/listings", listingsRouter);
app.use("/transactions", transactionsRouter);

app.get('/home', (req, res) => {
    res.send('Login successful');
});

app.get('/api', (req, res) => {

    res.send('API Route');

});

 
 

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

////"proxy": "http://localhost:5000",