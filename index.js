function converteParaFarenheit() {
    const temperaturaCelsius = parseFloat(
        document.getElementById("temperatura-celcius").value
    );
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    document.getElementById("resultado-fahrenheit").value =
        temperaturaFahrenheit.toFixed(2) + " Fahrenheit";
}
