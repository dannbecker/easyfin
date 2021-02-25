const modeloTabelas = require('./modeloTabelaAlunos')


modeloTabelas
    .sync()
    .then(()=> console.log("vc conseguiu "))
    .catch(console.log())