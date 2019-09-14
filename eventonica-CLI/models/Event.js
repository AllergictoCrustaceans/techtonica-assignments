const Sequelize = require('sequelize');
const db = require('../config/database');

const Event = db.define('event', {
    title: {
        type: Sequelize.STRING
    },
    start_time: {
        type: Sequelize.DATE
    },
    venue_name: {
        type: Sequelize.STRING
    },
    venue_address: {
        type: Sequelize.STRING
    }
})

module.exports = Event;