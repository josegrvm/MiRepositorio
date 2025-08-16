
// Algoritmos sección 1 – D (¡A trabajar duro con los arreglos!)
// Intercambio de Variables:

// Imagina que tienes dos cajas, una con limones y otra con pelotas. 
// Si decides intercambiar el contenido de las cajas, ¿cómo lo harías en 
// código? En este ejemplo, asignamos el contenido de la primera caja a la 
// segunda (caja2 = caja1). 

// Tenemos 2 cajas: una con limones y otra con pelotas
var caja1 = "limones";
var caja2 = "pelotas";
// Intentamos intercambiar el contenido, ¿pero qué pasa?
caja2 = caja1;
// ¿Qué tiene las cajas ahora?
console.log(caja2 + " y " + caja1);

// Pero espera, ¿qué pasa si queremos conservar el contenido original de ambas 
// cajas? Ahí es donde entra en juego una variable temporal (llamada “temp”)
//  que nos ayuda a intercambiar el contenido de manera segura.

var caja1 = "limones";
var caja2 = "pelotas";

// Revisamos el contenido de las cajas antes de intercambiarlas 
console.log(caja1 + " y " + caja2);
// Intercambiamos usando la variable temp (viene de "temporal")
var temp = caja1;
caja1 = caja2;
caja2 = temp;
// Revisamos el contenido de las cajas intercambiadas 
console.log(caja1 + " y " + caja2);

//  Bucles WHILE vs. Bucles FOR:

// Ya hemos trabajado con bucles FOR, pero ¿cómo se diferencian de los bucles 
// WHILE? Mientras que un bucle FOR es útil cuando sabemos exactamente cuántas 
// veces queremos que se repita una acción, un bucle WHILE es ideal cuando queremos 
// que una acción se repita mientras una condición específica se cumpla. 

// En el siguiente ejemplo, observamos cómo se actualizan las variables ”Inicio”
//  y “Final” en cada iteración del bucle WHILE.

var inicio = 0;
var final = 30;
// Este bucle se ejecutará hasta que la variable final llegue a cero
while(final >= 0)  {
    console.log("inicio: " + inicio + ", final: " + final);
    inicio += 5;
    final -= 5;
}

// Invertir un Arreglo:

// ¿Alguna vez quisiste darle la vuelta a un arreglo? Bueno, ahora podemos 
// hacerlo con una función llamada Reverse. Si te dan un arreglo como 
// [1, 2, 3, 4, 5], la función debería devolverte [5, 4, 3, 2, 1]. ¿Listo para 
// darle la vuelta a tu arreglo?

arreglo = [1, 2, 3, 4, 5]
arreglo.reverse()
// ¿Revisamos?
console.log(arreglo)