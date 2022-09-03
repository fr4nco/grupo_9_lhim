const {Sequelize} = require('sequelize');

const mySqlConnection = new Sequelize ('lhim','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = mySqlConnection

