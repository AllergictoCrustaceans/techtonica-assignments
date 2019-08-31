const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5432;

app.get('/', (req, res) => {
    res.send('INDEX');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
