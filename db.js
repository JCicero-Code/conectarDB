

const Sequelize = require('sequelize');
const sequelize = new Sequelize('bdteste','root','',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize;

