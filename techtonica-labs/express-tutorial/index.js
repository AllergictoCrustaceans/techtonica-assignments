const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//INIT Middleware
// app.use(logger);

//BODY PARSER
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//MEMBERS API ROUTES
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 