const Sequelize = require('sequelize');
module.exports = new Sequelize('eventonica', 'tpl619_9', 'techtonica', { //you created a database on pgAdmin called codegig tho. solve that by creating a codegig db under another user within psql? 
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
