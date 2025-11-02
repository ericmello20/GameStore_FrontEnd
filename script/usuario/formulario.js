document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idFormulario: 'formUsuario',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Email', dado: 'email', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Senha', dado: 'senha', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Data Nascimento', dado: 'dataNascimento', tipo: 'data', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/game/usuarios',
        urlEditar: 'http://localhost:8080/game/usuarios',
        urlCargaDados: 'http://localhost:8080/usuarios/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
