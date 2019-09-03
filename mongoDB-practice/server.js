const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');


const app = express();

const PORT = 8000;

//bodyParser
app.use(bodyParser.urlencoded({extended:true}));



//MongoClient connection to my DB
var url = 'mongodb://localhost:8000/notes';

MongoClient.connect(url, function(err, db) {
    console.log("connected");
    db.close();
}); 

//import routes folder  
require('./app/routes')(app, {});


//listen port
app.listen(PORT, () => {  console.log(`Server started on ${PORT}`);    });
