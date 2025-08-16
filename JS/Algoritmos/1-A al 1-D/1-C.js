
// Algoritmos sección 1 – C

// Hoy vamos a hablar sobre cómo el computador entiende y ejecuta el código.
// Es como seguir la corriente del código mientras se ejecuta. Primero, 
// vamos a ver cómo operan las funciones. 

// Mira este ejemplo:
//Cómo cambiamos el valor de una variable

// Este es el contenido inicial de la variable "valor"
var valor = 50;

function cambiarValor(nuevoValor) {
    // Acá le asignamos el nuevo valor
    valor = nuevoValor; 
}
// Muestra el valor inicial de la variable
console.log(valor);
// Acá le pasamos a la función el nuevo valor
cambiarValor(10);
// Muestra el nuevo valor de la variable
console.log(valor);

//¿Ves lo que está pasando? Estamos cambiando el contenido de la variable 
// “valor” usando una función llamada cambiarValor. Es como decirle al computador: 
// “¡Hey! Cambia el contenido de la variable “valor” a 10”. Y luego, cuando miramos 
// la variable “valor” otra vez, ¡ha cambiado! 

//  Aquí tienes otro ejemplo:

// A la variable miVar se le asigna un valor 
var miVar = 5;

function sumarAmiVar(cantidad) {
    // Se suma a la variable llamada miVar la cantidad que le indicamos a la función 
    return miVar + cantidad;
}
// Vemos lo que mi variable miVar tiene al inicio
console.log(miVar);
// Creamos una nueva variable llamada resultado y le indicamos que la cantidad que 
// queremos sumar es -10. Luego retornamos la suma a la variable resultado
var resultado = sumarAmiVar(-10);
// Se muestra lo que tiene la variable resultado 
console.log(resultado);
// Se muestra lo que tiene la variable miVar
console.log(miVar);

//  En esta función, estamos sumando un número a la variable llamada miVar.
//  Pero fíjate que usamos return. Esto significa que cuando llamamos a la 
// función, ¡obtenemos el resultado de la suma de vuelta! 

//  Por último, vamos a ver cómo podemos saber si un arreglo es un palíndromo.
//  ¿Sabes lo que es un palíndromo? Es una palabra que se lee igual hacia adelante
//  y hacia atrás, como “somos” o “seres”. Aquí vemos si un arreglo tiene los mismos
// valores al leerlo hacia adelante y hacia atrás. 


//  Echa un vistazo a este código:

function esPalindromo(arreglo) {
    for(var izquierda=0; izquierda<arreglo.length/2; izquierda++) {
        var derecha = arreglo.length-1-izquierda;
        if(arreglo[izquierda] != arreglo[derecha]) {
            return "No es un palíndromo :(";
        }
    }
    return "¡¡¡SI es un palíndromo!!!";
}
// Le damos las letras de la palabra una a una para que pueda comparar    
var resultado1 = esPalindromo( ["r", "a", "d", "a", "r"] );
console.log(resultado1);

var resultado2 = esPalindromo( ["c", "a", "s", "a"] );
console.log(resultado2);

//. Acá revisamos si los valores en el arreglo son iguales cuando se leen 
// de izquierda a derecha y de derecha a izquierda. ¡Es como un juego 
// divertido para el computador!