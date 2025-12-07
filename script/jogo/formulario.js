document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idFormulario: 'formJogo',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto' },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Descricao', dado: 'descricao', tipo: 'textoLongo', obrigatorio: true },
            { titulo: 'Desenvolvedora', dado: 'desenvolvedora', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Valor', dado: 'valor', tipo: 'numero', obrigatorio: true },
            { titulo: 'Preco de Custo', dado: 'pCusto', tipo: 'numero', obrigatorio: true },
            { titulo: 'Data de Lancamento:', dado: 'dataLancamento', tipo: 'data', obrigatorio: true }
        ],
        idObjeto: 'id',
        urlCadastrar: 'http://localhost:8080/game/jogos',
        urlEditar: 'http://localhost:8080/game/jogos/',
        urlCargaDados: 'http://localhost:8080/game/jogos/id=',
        token: localStorage.getItem("tokenAppCorporativa")
    };
    await appCorporativa.criarFormulario(
        parametros
    );
});

