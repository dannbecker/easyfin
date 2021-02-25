const sequelize = require('sequelize');
const config = require('config');


const instancia = new sequelize(
    config.get('mysql.dataBase'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        dialect: 'mysql',
        host: 'localhost'
              
    }
)

module.exports = instancia