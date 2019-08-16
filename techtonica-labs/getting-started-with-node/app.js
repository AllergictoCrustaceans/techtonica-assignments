//FROM EXPRESS INDEPENDENT PRACTICE
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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




app.get('/', function(req, res) {
    res.render('index');
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