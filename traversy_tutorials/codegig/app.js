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


//Body Parse
app.use(bodyParser.urlencoded({extended:false}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err));

const PORT = process.env.PORT || 5000;

//Index route
app.get('/', (req, res) => {
    res.render('index', {
        layout: 'landing'
    });
});

//Gig routes
app.use('/gigs', require('./routes/gigs'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
