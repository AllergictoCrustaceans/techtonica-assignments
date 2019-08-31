const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err));
})

//Disply add gig form
router.get('/add', (req, res) => {
    res.render('add');
})


//Add a gig
router.post('/add', (req, res) => {
    const data = {
        title: 'Looking for a React developer',
        technologies: 'react,javascript,html,css',
        budget: '$3000',
        description: 'Unlike recruiters, we look for at portfolios, not years of experience',
        contact_email: 'user1@gmail.com'
    }

    let {title, technologies, budget, description, contact_email} = data;

    //Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
})

module.exports = router;