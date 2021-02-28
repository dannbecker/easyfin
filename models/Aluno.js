const tabela22 = require('../Js/bancoDeDados/funcoes')

class Aluno {

    constructor({id, nome,cpf,email,senha}){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    async adiciona(){

        const resultado = await tabela22.inserir({
            nome: this.nome,
            cpf: this.cpf,
            email:this.email,
            senha:this.senha
        }) 
        
        this.id = resultado.id
    }
    async carrega(){
        const encontrado = await tabela22.buscaPorId(this.id)
        this.nome = encontrado.nome;
        this.cpf = encontrado.cpf;
        this.email = encontrado.email;
        this.senha = encontrado.senha;

        if(!encontrado){
            throw new Error('Id n encontrado') 
        }
        return encontrado

    }
    async atualiza(){
        
        const campos = ["nome", "email" ]
        const dadosAtualizados = {}
        
        campos.forEach((campo)=>{
            const valor = this[campo]

            if(typeof valor === "string" && valor.length > 0){
                dadosAtualizados[campo] = valor
            } 
        })
        await tabela22.atualiza(this.id, dadosAtualizados)
    }
    remove(){
        return tabela22.delete(this.id)
    } 



}

module.exports = Aluno