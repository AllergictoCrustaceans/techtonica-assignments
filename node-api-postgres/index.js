const express = require('express');
const bodyParser = require('bosy-parser');
const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }) 
)