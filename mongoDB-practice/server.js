const express = require('express');
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const bodyParser = require('body-parser');
const db = require('./config/db');


const app = express();

const PORT = 8000;

//bodyParser
app.use(bodyParser.urlencoded({extended:true}));


//MongoClient connection to my DB
MongoClient.connect("mongodb://localhost:8000/notes", { useNewUrlParser: true }); //WTF

const database = db('note-api')

//import routes folder  
require('./app/routes')(app, {database});
//listen port
app.listen(PORT, () => {  
    console.log(`Server started on ${PORT}`);
    });
