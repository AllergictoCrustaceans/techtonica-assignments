const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Event = require('../models/Event');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Get event list
router.get('/', (req, res) => {
    Event.findAll()
        .then(events => res.render('events', {
            events
            }))
        .catch(err => console.log(err));
})

//search for events
router.get('/search', (req, res) => {
    let {term} = req.query;
    
    //Make lower case
    term = term.toLowerCase();

    //call find all
    Event.findAll({where: {title: { [Op.like]: '%' + term + '%'}}})
    .then(events => res.render('events', {events}))
    .catch(err => console.log(err));
})

module.exports = router;