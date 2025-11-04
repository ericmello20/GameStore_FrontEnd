document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idTabela: 'tabelaDlc',
        url: 'http://localhost:8080/game/dlcs',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Desenvolvedora', dado: 'desenvolvedora' },
            { titulo: 'Descricao', dado: 'descricao' },
            { titulo: 'Valor', dado: 'valor' },
            { titulo: 'Preco de Custo', dado: 'pCusto' },
            { titulo: 'Jogo Base', dado: 'jogoBase.nome' },
            { titulo: 'Data de Lancamento:', dado: 'dataLancamento' }
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/game/dlcs',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});