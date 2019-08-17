//FROM EXPRESS INDEPENDENT PRACTICE
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const db = mongojs('getting-started-with-node', ['users']);
const ObjectId = mongojs.ObjectId;

const app = express();

// var logger = function(req, res, next) {
//     console.log('Logging...');
//     next();
// }

// app.use(logger);


// VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//BODY PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//SET STATIC PATH 
app.use(express.static(path.join(__dirname, 'public'))); // might need to make a directory called public

//GLOBAL VARS
app.use(function(req, res, next) {
    res.locals.errors = null;
    next();
});

//EXPRESS VALIDATOR MIDDLEWARE
app.use(express.json());

app.get('/', function(req, res) {

    db.users.find(function(err, docs) {
        res.render('index', {
            title: 'Customers',
            users: docs
        });
    });
});

app.post('/users/add', function(req, res) {

    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', ' Last Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        db.users.insert(newUser, function(err, result) {
            if(err) {
                console.log(err);
            } 
            res.redirect('/');
        });
    }

    console.log(newUser);
});

app.delete('/users/delete/:id', function(req, res) {
    db.users.remove({_id: ObjectId(req.params.id)}, function(err) {
        if(err) {
            console.log(err);
        } 
        res.redirect('/');
    })
});


app.listen(3000, function() {
    console.log('Server started on port 3000...');
})









// //FROM NODE PART 1 AND 2 INDEPENDENT PRACTICE
// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;

// fs.readFile('index.html', (err, html) => {
//     if(err) {
//         throw err;
//     } 
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(html);
//         res.end();
//     });
    
//     server.listen(port, hostname, () => {
//         console.log('Server started on port' + port);
//     });
// });