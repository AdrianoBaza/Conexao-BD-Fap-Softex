(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try { 
        const resultado = await database.sync();
        console.log('Conexão estabelecida com sucesso');
    } catch (erro) {
        console.log("Conexão falhou! " + erro);
    };
})();