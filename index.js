let nomeAtualParaEditar;
let IdadeAtualParaEditar;

function converteParaFarenheit() {
    const temperaturaCelsius = parseFloat(
        document.getElementById("temperatura-celcius").value
    );
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    document.getElementById("resultado-fahrenheit").value =
        temperaturaFahrenheit.toFixed(2) + " Fahrenheit";
}

function mostrarCartaoAltera(nome, idade) {
    document.getElementById("nome-altera").value = nome;
    nomeAtualParaEditar = nome;

    document.getElementById("idade-altera").value = idade;
    IdadeAtualParaEditar = parseInt(idade);
}
