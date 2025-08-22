

var a = 35;
a = a - 11;
console.log(a/3);

a = "Hola!";
console.log(a + " Adiós");

// Lección 2: ¿Qué hacen los bucles?

for(var i=0; i<20; i++) {
    console.log("Dentro del bucle", i);
    i = i + 2;
}
console.log("Salimos del bucle " + i);

//  Lección 3 : ¿Qué hace este trozo de código?

function calcularTotal(arrayOfNumbers) {
    var suma = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        suma += arrayOfNumbers[i];
        console.log("La suma actual es " + suma, "en el bucle", i);
    }
    console.log("La suma total es " + suma);     
}
calcularTotal([2, 4, 6]);

//  ¡Extra! ¿Por qué la respuesta es 14? ¿Te dio ese mismo resultado?