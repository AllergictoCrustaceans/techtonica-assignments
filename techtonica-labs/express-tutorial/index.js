const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const {I_LOVE} = require('./views/config');

const app = express();

console.log('I love', I_LOVE);

//INIT Middleware
// app.use(logger);


//HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//BODY PARSER
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HOMEPAGE ROUTE
app.get('/', (req,res) => res.render('index', {
    title: 'Member App',
    members
}));


//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//MEMBERS API ROUTES
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 