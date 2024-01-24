function calcularCuadrados(listaNumeros) {
    var listaCuadrados = [];

    listaNumeros.forEach(function(numero) {
        var cuadrado = numero * numero;
        listaCuadrados.push(cuadrado);
    });

    return listaCuadrados;
}

// Ejemplo de uso:
var listaEntrada = [2, 4, 6, 8];
var listaCuadrados = calcularCuadrados(listaEntrada);

console.log("Lista original: " + listaEntrada);
console.log("Lista con cuadrados: " + listaCuadrados);