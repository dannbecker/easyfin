//const conexao = require('../conexao');
//const Tabela = require('../TabelaAlunos');


const Tabela22 = require('../bancoDeDados/funcoes')
const Aluno = require('../../models/Aluno')


module.exports = app => {

    app.get('/', (req, res)=>{

        res.sendFile("C:/Users/Ale/Documents/GitHub/easyfin/view/index.html")
        console.log("Usando o sequelize e os metodos")


    })
    app.get('/log-in' , (req,res)=>{
        res.sendFile("C:/Users/Ale/Documents/GitHub/easyfin/view/log-in.html")
    })
    app.post('/log-in', (req,res) => {
        
    } )
    app.get('/dashboard', async (req,res)=>{
        res.sendFile('C:/Users/Ale/Documents/GitHub/easyfin/view/dashboard.html')
        const resultado = await Tabela22.listar()

        console.log(JSON.stringify(resultado))
    }) 

    app.get('/listarAlunos' , async (req, res)=>{

        res.send()

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
            JSON.stringify(aluno)
            res.send(aluno)
        }
        catch(erro){
            res.send(
                JSON.stringify({ 
                    mensagem: erro.message
                })
            )
        }

    })

    app.put('/atualizaDadosAluno/:id', async (req,res) => {
        try{
        const id = req.params.id;
        const dadosParaMudar = req.body;
        const dadosNovos = Object.assign({}, dadosParaMudar, {id : id})
        const aluno  = new Aluno(dadosNovos);
        await aluno.atualiza()
        res.end();
       } catch(Error){
           throw new Error("Não foi possivel atualizar os dados")
       }
    })
    app.delete('/deletarAluno/:id', async (req,res) =>{

        const id = req.params.id;
        const aluno = new Aluno({id : id})
        await aluno.carrega()
        await aluno.remove()
        res.end()


    })


}


