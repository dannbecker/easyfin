const conexao = require('../Js/conexao');
const data = require('moment');

class TabelaAlunos{

    init(conexao){

        this._conexao = conexao;
        this.criarTabela(conexao);


    }

    criarTabela(conexao){

        const sql = `CREATE TABLE IF NOT EXISTS alunos 
            (id int NOT NULL AUTO_INCREMENT,
            nome varchar(30) NOT NULL, 
            cpf varchar(20) NOT NULL,
            email varchar(40) NOT NULL,
            senha varchar(40) NOT NULL,
            dataNascimento datetime NOT NULL, 
            PRIMARY KEY(id))`;

        
        conexao.query(sql, (erro, acerto) => {

            if(erro) console.log(erro);
        })    

    }
    adicionarAlunos(aluno){

    
        const sql = `INSERT INTO easyFin_db.alunos SET ?  `

        let novoAluno =  aluno;

        const dataNascimento = data(aluno.dataNascimento,'DD/MM/YYYY').format('YYYY/MM/DD');
        const alunoFinal = {...novoAluno,dataNascimento};
        

        conexao.query(sql, alunoFinal, (erro, acerto) =>{
            
            if(erro){
                console.log(erro)
            }else {
                console.log(acerto)
            }

        })


    }

    BuscaAluno(id) {

        const sql = ` SELECT * FROM easyFin_db.alunos WHERE id = ${id} `;    
        
        conexao.query(sql , (erro,acerto) =>{

            if(erro){
                console.log(erro)
            } else {
                console.log(acerto);
            }


        })




    }


}
module.exports = new TabelaAlunos;