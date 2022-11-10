var bd = openDatabase("minhaBD", "1.0", "Meu Banco de Dados", 4080);

let listaNomes = [];
let listaIdades = [];



bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE nomes (nome TEXT, idade INTEGER)");
});
function salvarInfo() {
    const nomeUsuario = document
        .getElementById("nome-usuario")
        .value.toUpperCase();
    const idadeUsuario = parseInt(
        document.getElementById("idade-usuario").value
    );
    if (nomeUsuario === "" || isNaN(idadeUsuario)) {
        alert("faltam informações");
        return false;
    }
    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO nomes (nome,idade) VALUES (? , ?)", [
            nomeUsuario,
            idadeUsuario,
        ]);
    });
}
function pesquisaPorNome() {
    const nomeUsuario = document
        .getElementById("pesquisa-nome-usuario")
        .value.toUpperCase();
    bd.transaction(function (ler) {
        ler.executeSql(
            `SELECT * FROM nomes WHERE nome like "%${nomeUsuario}%"`,
            [],
            function (ler, resultados) {
                const tamanho = resultados.rows.length;
                const msg = tamanho + "linhas encontradas";
                console.log(msg);
                const nome = resultados.rows.item(tamanho - 1).nome;
                const idade = resultados.rows.item(tamanho - 1).idade;
                document.getElementById("pesquisa-nome-usuario").value = nome;
                document.getElementById("resultado-pesquisa").value = idade;
            }
        );
    });
}

function exibeBD() {
    bd.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM nomes",
            [],
            function (exibe, resultados) {
                const tamanho = resultados.rows.length;
                let item;

                document.getElementById("lista-bd").innerHTML = "";

                for (let i = 0; i < tamanho; i++) {
                    item = resultados.rows.item(i);
                    document.getElementById(
                        "lista-bd"
                    ).innerHTML += `<p onclick="mostrarCartaoAltera('${item.nome}',${item.idade})">Nome: ${item.nome},${item.idade} anos</p>`;
                }
            }
        );
    });
}

function AlterarInfo(){
    const novoNome = document.getElementById("nome-altera").value;
    const novaIdade = parseInt(document.getElementById("idade-altera").value);

    bd.transaction(function(altera) {
        altera.executeSql(`UPDATE nomes SET nome="${novoNome}", idade=${novaIdade} WHERE nome="${nomeAtualParaEditar}" AND idade=${IdadeAtualParaEditar} `);
    })
    exibeBD();
};


function ExcluiInfo(){
    bd.transaction(function(excluir) {
        excluir.executeSql(`DELETE FROM nomes WHERE nome="${nomeAtualParaEditar}" AND idade=${IdadeAtualParaEditar} `);
    })
    exibeBD();
};



