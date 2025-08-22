

// Algoritmos sección 2 – A (Usando nuestra biblioteca de Matemáticas)
// Ejemplos:

// Calculemos el perímetro y área de un círculo aleatorio. ¿Podemos predecir
//  lo que nos dará “random”?

function calcularCirculo() {
    var radio = Math.round(Math.floor(Math.random() * 10) + 1); // Genera un radio aleatorio entre 1 y 10
    var perimetro = Math.round(2 * Math.PI * radio); // Calcula el perímetro del círculo
    var area = Math.round(Math.PI * Math.pow(radio, 2)); // Calcula el área del círculo
    return { radio: radio, perimetro: perimetro, area: area };
}
var circuloAleatorio = calcularCirculo();

console.log("Radio: " + circuloAleatorio.radio);
console.log("Perímetro: " + circuloAleatorio.perimetro);
console.log("Área: " + circuloAleatorio.area);

// Generemos una contraseña aleatoria usando las funciones Math.floor
//  y Math.random.

function generarContraseña(longitud) {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var contraseña = "";
    for (var i = 0; i < longitud; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indice);
    }
    return contraseña;
}
var contraseñaAleatoria = generarContraseña(8); // Genera una contraseña de longitud 8
console.log("Contraseña aleatoria: " + contraseñaAleatoria);

//  Adivinemos el número secreto.

var numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
var intentos = 0;

while (true) {
    var intento = Math.floor(Math.random() * 10) + 1; // Una persona debe ingresar un número, pero para efectos del ejercicio se dejó aleatorio
    if (intento === null || intento === "") {
        console.log("Has cancelado el juego o no has ingresado un número. El número secreto era " + numeroSecreto + ".");
        break;
    } else {
        intentos++;
        intento = parseInt(intento);
        if (isNaN(intento)) {
            console.log("Por favor, introduce un número válido.");
        } else if (intento < numeroSecreto) {
            console.log("Demasiado bajo. ¡Sigue intentándolo!");
        } else if (intento > numeroSecreto) {
            console.log("Demasiado alto. ¡Sigue intentándolo!");
        } else {
            console.log("¡Felicidades! ¡Has adivinado que el número secreto era", numeroSecreto + "!");
            break;
        }
    }
}