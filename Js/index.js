const customExpress = require('../Js/customExpress.js')
const app = customExpress()
const conexao = require('../Js/conexao')
const TabelaAlunos = require('../Js/TabelaAlunos.js');

conexao.connect((erro, acerto) => {

    if(erro){
        console.log("resultado : " + erro);
    } else {
        
        TabelaAlunos.init(conexao)
        console.log("conectei com a dataBase ")
        
    }
})



app.listen(3000, () => console.log("Porta 3000 sendo ouvida"))


