document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idTabela: 'tabelaCartao',
        url: 'http://localhost:8080/game/cartoes',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Numero do Cartao', dado: 'numero' },
            { titulo: 'Data de Validade', dado: 'validade' },
            { titulo: 'Codigo de Seguranca', dado: 'cvv' },
            { titulo: 'CPF do Titular', dado: 'cpfTitular' },
            { titulo: 'Bandeira', dado: 'bandeira' },
            { titulo: 'Usuario', dado: 'usuario.nome' }
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/game/cartoes',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});