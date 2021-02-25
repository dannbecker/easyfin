
const modelo = require('C:/Users/Ale/Documents/GitHub/easyfin/models/modeloTabelaAlunos.js')


module.exports = {

    listar(){
        return modelo.findAll();

    },
    
    inserir(aluno){

        return modelo.create(aluno)

    },
    async buscaPorId(id){
        return modelo.findOne({
            where:{
                id:id
            }
        })
        

    }




}