const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars'); 
const bodyParser = require('body-parser');
const db = require('./config/database');

const app = require('./app');

const PORT = process.env.PORT || 5000;

const cli = express();


// // Handlebars Middleware
cli.engine('handlebars', exphbs({ defaultLayout: 'main' }));
cli.set('view engine', 'handlebars');


// // Body Parser Middleware
cli.use(bodyParser.json());
cli.use(bodyParser.urlencoded({ extended: false }));


// Set static folder
cli.use(express.static(path.join(__dirname, 'public')));

//Test DBs
db.authenticate()
  .then(() => console.log('Database User connected...'))
  .catch(err => console.log('Error:' + err));


// Homepage Route
cli.get('/', (req, res) => {
  res.render('index', {
    layout: 'landing'
  });
});


// User and Event Routes
cli.use('/users', require('./routes/users'));
cli.use('/events', require('./routes/events'));



// //For CLI DISPLAY ONLY. 
// const pgConnect = () => {
//   dbUser.connect((err) =>{
//     if (err) throw err;

//     console.log('Welcome to Eventonica')
//     console.log("connected as Administrator");

//      app.startQuestion(function closeConnectionCallback() {
//        dbUser.end();
//      });
//   })
// }

// pgConnect();

cli.listen(PORT, console.log(`Server started on port ${PORT}`));

