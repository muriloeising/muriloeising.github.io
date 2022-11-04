var bd = openDatabase("minhaBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE nomes (nome TEXT, idade INTEGER)");
});
function salvarNome() {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const idadeUsuario = parseInt(
        document.getElementById("idade-usuario").value
    );
    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO nomes (nome,idade) VALUES (? , ?)", [
            nomeUsuario,
            idadeUsuario,
        ]);
    });
}
 function pesquisaPorNome(){
    const nomeUsuario = documente.getElementById("pesquisa-nome-usuario").value;
    bd.transaction(function (ler){
ler.executeSql(SELECT * FROM formulario WHERE nome="${nomeUsuario}" , [], function (ler, resultados){
    const tamanho = resultados.rows.length
    const msg = tamanho + "linhas encontradas";
}
    })
    alert(nomeUsuario);
 }