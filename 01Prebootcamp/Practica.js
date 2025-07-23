
/* 
var nota = 54;


0 - 40 Reprobado
41 - 60 Proficiente
61 -90 Excelente



if(nota >= 0 && nota <= 40){
    console.log("Reprobado")

} else if( nota > 41 && nota > 60){
    confirm.log("Proficiente")

}else if( nota >= 61 && nota <= 90){
    console.log("Excelente")

} else{
    console.log()
}



var nota = 21;
var grado = "secundaria";

/* Primaria
0 - 40 Reprobado
41 - 60 Proficiente
61 - 90 Excelente
91 - 100 Sobresaliente

    Secundaria
0 -20 Reprobado
21 - 50 Proficiente
51 - 80 Excelente
81 - 100 Sobresaliente


var nota = 21;
var grado = "Secundaria";

if (grado == "Primaria"){
    if (nota >= 0 && nota <= 40) {
        console.log ("Reprobado")

    } else if (nota >= 41 && nota <= 60){
        console.log ("Proficiente")

    } else if (nota >= 61 && nota <= 90){
        console.log ("Excelente")

    } else if (nota >= 91 && nota <= 100) {
        console.log ("Sobresaliente")
    } else {

        console.log ("Fuera de rango")
    }

}else if (grado == "Secundaria")
    if (nota >= 0 && nota <= 20) {
        console.log ("Reprobado")

    } else if (nota >= 21 && nota <= 50){
        console.log ("Proficiente")

    } else if (nota >= 51 && nota <= 80){
        console.log ("Excelente")

    } else if (nota >= 81 && nota <= 100) {
        console.log ("Sobresaliente")

    } else {
        console.log ("Fuera de rango")
}


var listaNombres = ["Ricardo", "Juan", "Maria", "Carlos", "Claudia", "Michael", "Victor"];
    for(var i = 0; i < listaNombres.length; i++){

        console.log(`hola ${listaNombres[i]}!`)

    }



    Tipos de arreglos
    listaNombre.push("Claudia");
    listaNombre.unshift("Roberto");
    listaNombre.shift();
    listaNombre.splice(1,0,"tito");
    listaNombre.splice(1,1);
        listaNombre.splice(1,1, "juan");  Replanzar o modificar
    listaNombre.length o [];
    

var listaNombres = ["Ricardo", "Juan", "Maria", "Carlos", "Claudia", "Michael", "Victor"];
var listaNotas = [30, 20, 50, 80];

    for(var i = 0; i < listaNombres.length; i++){

        console.log("Hola" + listaNombres)

    }


function evaluarNotas(){
    
    console.log("Holaa Mundo");
}

evaluarNotas();

*/

// Bloque 1

function saluda() {

    console.log("¡Hola!");

}

saluda();

console.log("¿Cómo estás?");


//. Bloque 2

function saluda() {

    console.log("¡Hola!");

    return 50;

}

var resultado = saluda();

console.log("El resultado es:"+resultado);


//. Bloque 3

function suma(numero) {

    console.log("El número es:"+numero);

    return numero + 20;

}

var resultado = suma(5);

console.log("El resultado es:"+resultado);


   // Bloque 4 – Hay un giro inesperado

var numero = 10;

console.log(numero);

function imprimeYRegresa(numero2) {

    console.log(numero2);

    return numero2;

}

var resultado = imprimeYRegresa(7);

console.log(resultado);

console.log(numero);


//. Bloque 5

var numero = 10;

console.log(numero);

function alCuadrado(numero2) {

    console.log(numero2);

   return numero2 * numero2;

}

var resultado = alCuadrado(7);

console.log(resultado);

console.log(numero);


   // Bloque 6

function alCuadrado(numero) {

    console.log("El número es:"+numero);

    var cuadrado = numero * numero;

    return cuadrado;

}

var resultado = alCuadrado(2) + alCuadrado(5);

console.log("El resultado es:"+resultado);


  // Bloque 7

function sumatoria(numero1, numero2) {

    return numero1 + numero2;

}

console.log(sumatoria(4, 3));

console.log(sumatoria(2, 9));


   // Bloque 8

function imprimirSumatoria(numero1, numero2) {

    console.log(numero1);

    return numero1 + numero2;

}

console.log(imprimirSumatoria(4, 3));

console.log(imprimirSumatoria(2, 9));



//.  Bloque 9

function sumatoria(numero1, numero2) {

    var suma = numero1 + numero2

    console.log("La suma es:"+suma);

    return suma;

}

var resultado = sumatoria(4, 3) + sumatoria(2, 9);

console.log("El resultado es:"+resultado);


  // Bloque 10 – Tómalo con calma, ya que es un desafío más complejo

function sumatoria(numero1, numero2) {

    var suma = numero1 + numero2

    console.log("La suma es:"+suma);

    return suma;

}

var resultado = sumatoria(1,2) + sumatoria(3,sumatoria(4,1)) + sumatoria(sumatoria(2,3),sumatoria(4,1));

console.log("El resultado es:"+resultado);


//. TIP: Utiliza el orden de las operaciones. Comienza desde los paréntesis internos.


function crearArreglo() {

    var nuevoArreglo = ["a", "e", "i", "o", "u"];

    return nuevoArreglo; //Sentencia return

}

var vocales = crearArreglo();

console.log (vocales);


function saluda() {

    return "¡Hola mundo!";

}

var frase = saluda();

console.log(); //Imprime aquí ¡Hola mundo!



var x = [['hola', 'mundo'], ['bienvenido', 'a']];
console.log(x[0][1] + ' ' + x[1][0])


var x = 5;
var y = [[1, 2, 3], [4, 5], [6, 7, 8]];
if (y[1][1] == x) {
    console.log('Correcto');
} else {
    console.log('Incorrecto');
}

var arr = [[10, 20, 30], [40, 50, 60]];
if (arr[0][2] == 30) {
    arr[1].push(70);
    console.log(arr[1]);
}


var x = [[2, 4, 6, 8], [10], [12, 14, 16]];
if (x[0][0] + x[1][0] == x[2][0]) {
    console.log(x[0][2] + x[2][1]);
} else {
    console.log(x[0][1] + x[1][0]);
}

var arr = [['a', 'b', 'c'], ['d', 'e', 'f']];
console.log(arr[0][0] + arr[1][2])

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[2][2] + matrix[0][0]);


var data = [[5, 10], [15, 20, 25], [30, 35]];
if (data[1][0] > data[0][1]) {
    console.log(data[2][1]);
} else {
    console.log(data[0][0]);
}


var x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
if (x[0][2] == 9) {
    console.log(x[1][1]);
}


var y = [['uno', 'dos'], ['tres', 'cuatro'], ['cinco', 'seis']];
if (y[2][0] == 'cinco') {
    y[1].push('nuevo');
    console.log(y[1]);
}


var x = ['apple', 'banana', 'cherry'];
x[3] = 'date';
console.log(x.length + ' ' + x[1]);

var x = 3;
var points = [10, 20, 30, 40, 50];
if (points[x] == 40) {
    console.log(points[x - 1]);
} else {
    console.log('Hola');
}


var x = 'coding';
var y = ['a', 'b', 'c'];
if (x.length == 6) {
    y.push(x);
    console.log(y.length);
}
console.log(y);



var names = ['Alice', 'Bob', 'Charlie', 'David'];
if (names.length == 4) {
    console.log(names[names.length - 2]);
} else {
    console.log('Error');
}