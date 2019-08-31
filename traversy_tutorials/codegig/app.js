const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database 
const db = require('./config/database');

const app = express();


//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err));

const PORT = process.env.PORT || 5432;

app.get('/', (req, res) => {
    res.send('INDEX');
});

//Gig routes
app.use('/gigs', require('./routes/gigs'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
