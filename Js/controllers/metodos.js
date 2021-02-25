//const conexao = require('../conexao');
//const Tabela = require('../TabelaAlunos');


const Tabela22 = require('../bancoDeDados/funcoes')
const Aluno = require('../../models/Aluno')


module.exports = app => {

    app.get('/listarAlunos' , async (req, res)=>{

    const resultado = await Tabela22.listar()

        res.send(
            JSON.stringify(resultado)
        )

    } )
    app.post('/cadastraAluno', async(req,res)=>{

        const dados = req.body
        const aluno = new Aluno(dados)
        await aluno.adiciona()

        res.send(JSON.stringify(aluno))


    })
    app.get('/buscaPorId/:id', async (req,res)=>{
        try {
            const id = req.params.id
            const aluno = new Aluno({id:id})
            await aluno.carrega()
            res.send(JSON.stringify(aluno))
        }
        catch(erro){
            res.send(
                JSON.stringify({ 
                    mensagem: erro.message
                })
            )
        }

    })


    


}


