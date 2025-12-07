document.addEventListener("DOMContentLoaded", async function () {
    let parametros = {
        idFormulario: 'formCartao',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto' },
            { titulo: 'Numero do Cartao', dado: 'numero', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Data de Validade', dado: 'validade', tipo: 'data', obrigatorio: true },
            { titulo: 'Codigo de Seguranca', dado: 'cvv', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'CPF do Titular', dado: 'cpfTitular', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Bandeira', dado: 'bandeira', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Usuario', dado: 'usuario', dadoExibicao: 'usuario.nome', urlConsulta: 'http://localhost:8080/game/usuarios', tipo: 'relacionamento', obrigatorio: true }
        ],
        idObjeto: 'id',
        urlCadastrar: 'http://localhost:8080/game/cartoes',
        urlEditar: 'http://localhost:8080/game/cartoes/',
        urlCargaDados: 'http://localhost:8080/game/cartoes/id=',
        token: localStorage.getItem("tokenAppCorporativa")
    };
    await appCorporativa.criarFormulario(
        parametros
    );
});

