// requiring express for making express server
const express= require('express');

// using express as an app
const app = express();

// another module require for views
const path = require('path');

// defining the port number
const port=5000;

// importing the database(mongodb)
const db=require('./config/mongoose')

// // importing the model 
// const habbit=require("./model/habbit");

// setting up view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

//use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running express server on port',port);
    }
    console.log('Express server is running on port',port);
});