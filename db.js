const Sequelize = require('sequelize');
const sequelize = new Sequelize('conexao-bd', 'root', 'root', { 
    dialect: 'mysql',
    host: 'localhost'
});
 
module.exports = sequelize;