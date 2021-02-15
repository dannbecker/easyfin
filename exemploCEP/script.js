document.querySelector('button').addEventListener('click', function () {
    fetch("https://api.postmon.com.br/v1/cep/88348116")
        .then((response) => {
            return response.text();
        })
        .then((myContent) => {
            document.querySelector('.par').innerHTML = myContent;
            document.querySelector('.par').classList.add('box');
        });

}, false);