const Sequelize = require('sequelize');
const sequelize = new Sequelize('cdb', 'root', 'root', { 
    dialect: 'mysql',
    host: 'localhost'
});
 
module.exports = sequelize;