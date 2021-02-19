const conexao = require('../conexao');
const Tabela = require('../TabelaAlunos');


module.exports = app => {

    app.get('/log-in' , (req ,res) =>{

    res.send('Funcionando no log-in');
      
    })

    app.get('/buscaAlunos/:nome' , (req,res) =>{

        //const id = parseInt(req.params.id);
        const id = 1;
        const nome = req.params.nome
        const aluno =  Tabela.BuscaAluno(id,res);

       

    })

    app.post('/cadastraAlunos' ,(req,res)=> {

        Tabela.adicionarAlunos(req.body);

    })


    


}


