const tabela22 = require('C:/Users/Ale/Documents/GitHub/easyfin/Js/bancoDeDados/funcoes.js')
const Aluno = require ('C:/Users/Ale/Documents/GitHub/easyfin/models/Aluno')

async function  validaUsuario(){
    try{
        const emailUsuario = document.querySelector('.emailUsuario')
        const senhaUsuario = document.querySelector('.senha')

        var email = emailUsuario.value
        var senha = senhaUsuario.value

        const aluno = await tabela22.carregaPorEmail(email)

        console.log(aluno)
    
    }catch(erro){
        console.log(erro)
    }
    
}





