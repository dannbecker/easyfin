const sequelize = require('sequelize')
const instancia = require('C:/Users/Ale/Documents/GitHub/easyfin/Js/bancoDeDados/Sequelize.js')

const colunas ={
    nome :{
        type : sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull : false
    },
    senha:{
        type: sequelize.STRING,
        allowNull :false
    }
}


module.exports = instancia.define('alunos22', colunas);