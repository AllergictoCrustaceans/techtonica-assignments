const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');



//GETS ALL MEMBERS
router.get('/', (req,res) => res.json(members));

//GET SINGLE MEMBER
router.get('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found`});
    }
});

//CREATE MEMBER
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status:'active'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email'});
    } 

    
    members.push(newMember);
    res.json(members);
    // res.redirect('/');
});

//UPDATE MEMBER
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updateMember.name? updateMember.name : member.name;
                member.email = updateMember.email? updateMember.email : member.email;

                res.json({ msg: 'Member updated', member});
            }
        })
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found`});
    }
});

//DELETE MEMBER
router.delete('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json({ 
            msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found`});
    }
});

module.exports = router;