const express = require('express');
const router = express.Router();
const dbUser = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Get users list
router.get('/', (req, res) => {
    User.findAll()
        .then(users => res.render('users', {
            users
            }))
        .catch(err => console.log(err));
})

//Disply add user form
router.get('/add', (req, res) => {
    res.render('add');
})


//Add a User
router.post('/add', (req, res) => {
    let {name, age, description, contact_email} = req.body;
    let errors = [];

    //Validate Fields
    if(!name){
        errors.push({text: "Please enter your name."});
    }
    if(!age){
        errors.push({text: "Please enter your age."});
    }
    if(!description){
        errors.push({text: "Please check your attributes."});
    }
    if(!contact_email){
        errors.push({text: "Please add a contact email."});
    }

    //Check for errors
    if(errors.length > 0) {
        res.render('add', {
            errors, 
            name, 
            age, 
            description, 
            contact_email
        })
    } else {

        //See if email is authenticated?

        //Make lower case and remove space after comma
        name = name.toLowerCase().replace(/, /g, ',');

        //Insert into table
        User.create({
            name,
            age,
            description,
            contact_email
        })
            .then(user => res.redirect('/users'))
            .catch(err => console.log(err));
    }
})

//search for users
router.get('/search', (req, res) => {
    let {term} = req.query;
    
    //Make lower case
    term = term.toLowerCase();

    //call find all
    User.findAll({where: {name: { [Op.like]: '%' + term + '%'}}})
    .then(users => res.render('users', {users}))
    .catch(err => console.log(err));
})

module.exports = router;