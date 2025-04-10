const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const app = express();

    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({ extended: false })); 
        app.get('/', (req, res) => { 
        console.log('index.ejs loaded successfully');
        res.render('index.ejs');

    })

app.get('/home', (req, res) => {
    res.send('Login successful');
});

app.get('/api', (req, res) => {

    res.send('API Route');

});

const userRouter = require("./routes/users.js"); app.use("/users", userRouter); app.listen(5000, () => {
    console.log('Server started on port 5000');
});