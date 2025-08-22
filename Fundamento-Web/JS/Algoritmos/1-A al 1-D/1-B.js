
// Algoritmos sección 1 – B

// ¿Vamos a la playa?
// Hoy vamos a aprender sobre los condicionales. Recuerda hacer un “diagrama T” 
// mientras avanzamos. Así podrás seguir el camino de las variables y hacer predicciones s
// obre los resultados. ¡A divertirse aprendiendo!

var haceCalor = true;
var estáLloviendo = false;
var temperatura = 25; // supongamos que son grados Celsius
var quéCosasLlevar = "Llevaré";


if(haceCalor) {
    quéCosasLlevar += " traje de baño, toalla";
}
if(estáLloviendo) {
    quéCosasLlevar += " un paraguas";
}
if(temperatura < 20) {
    quéCosasLlevar += ", un abrigo";
}
quéCosasLlevar += " y una sonrisa!";
console.log(quéCosasLlevar);

//. ¡Ya llega Año Nuevo!
//Cuánto falta para Año Nuevo?

for(var i=10; i>0; i--) {
    if(i > 1) {
        console.log("¡"+ i + "!");
    }
    else if(i = 1) {
        console.log("¡Unooo!");
    }
}
console.log("¡Feliz Año Nuevo!");

//  ¿Contamos los números pares?

var contarPares = 0;
var numeros = [6, 4, 12, 7, 15, 20, 10, 2, 5, 9, 13, 16, 17, 21];

for(var i=0; i<numeros.length; i++) {
    if (numeros[i] % 2 == 0){
        contarPares += 1
    }
}    
console.log("Hay " + contarPares + " números pares.");