const conexao = require('../conexao');
const Tabela = require('../TabelaAlunos');


module.exports = app => {

    app.get('/log-in' , (req ,res) =>{

    res.send('Funcionando no log-in');
        
       

    })

    app.get('/buscaAlunos/:id' , (req,res) =>{

        const id = parseInt(req.params.id);

        sql = ` SELECT * FROM easyFin_db.alunos WHERE id = ${id} `;    
        
        conexao.query(sql , (erro,acerto) =>{

            if(erro){
                console.log(erro)
            } else if (acerto){
                res.status(200).json(acerto);
            }


        })



    })

    app.post('/cadastraAlunos' ,(req,res)=> {

        Tabela.adicionarAlunos(req.body);


    })



}


