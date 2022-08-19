const {Sequelize} = require('sequelize');

const mySqlConnection = new Sequelize ('LHIM','root','Emrprax2435', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = mySqlConnection

