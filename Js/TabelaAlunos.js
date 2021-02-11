
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

        const sql = ``



    }
}
module.exports = new TabelaAlunos;