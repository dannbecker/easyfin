
const sql = require('mysql2');

const conexao = sql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: 'root',
    password: 'Bc200764$',
    database: 'easyFin_db'
})

module.exports = conexao;