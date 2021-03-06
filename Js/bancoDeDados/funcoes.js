const modelo = require('C:/Users/Ale/Documents/GitHub/easyfin/models/modeloTabelaAlunos.js')


module.exports = {

    listar(){
        return modelo.findAll();

    },
    
    inserir(aluno){

        return modelo.create(aluno)

    },
    buscaPorId(id){
        return modelo.findOne({
            where:{
                id:id
            }
        })
        

    },
    atualiza(id, dadosAtualizados){
        return modelo.update(dadosAtualizados,{
            where:{
                id:id
            }
        })
    },
    delete(id){
        return modelo.destroy({
            where:{
                id:id
            }
        })

    },
    carregaPorEmail(email){

        return modelo.findOne({
            where:{
                email : email
            }   
        })

    }




}