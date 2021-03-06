


async function validaUsuario(tabela) {

    const email = document.querySelector(".emailUsuario");
    const senha = document.querySelector(".senha");


    const encontrado = await Tabela.carregaPorEmail(email.value)


    console.log(encontrado);




    
}