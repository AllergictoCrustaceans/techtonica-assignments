const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const PORT = 8000;

//listen 
app.listen(PORT, () => {console.log(`Server started on ${PORT}`);});