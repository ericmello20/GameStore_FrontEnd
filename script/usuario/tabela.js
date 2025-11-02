document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idTabela: 'tabelaUsuario',
        url: 'http://localhost:8080/game/usuarios',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Email', dado: 'email' },
            { titulo: 'Data de Nascimento', dado: 'dataNascimento' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/game/usuarios',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});