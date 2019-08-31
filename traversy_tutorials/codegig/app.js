const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database 
const db = require('./config/database');

const app = express();

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('INDEX');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
