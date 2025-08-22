

// Algoritmos sección 2 – C (Arreglos Dentro de Arreglos)

// Hoy vamos a hablar sobre algo interesante en programación: 
// los arreglos que contienen otros arreglos dentro. Es un concepto 
// curioso, pero muy útil.

// Arreglo principal    
var arregloPrincipal = [
//   Arreglo 1   Arreglo 2       Arreglo interno 3
    [1, 2, 3], ['a', 'b', 'c'], [true, false, true]
];
// Imprimir la tercera letra del segundo arreglo (la letra c)
console.log(arregloPrincipal[1][2]);

// Básicamente, estamos revisando todos los arreglos dentro del arreglo
// principal. Luego, dentro de cada uno de esos arreglos internos, 
// estamos buscando si el valor que queremos está ahí. Si lo encontramos
// en alguno de esos arreglos internos, decimos que sí está; si no, 
// decimos que no está.

// Ejemplo: Imagina que queremos ver la tercera letra del segundo arreglo.
//  ¿Cómo lo haríamos?

// Arreglo principal    
var arregloPrincipal = [
//   Arreglo 1   Arreglo 2       Arreglo interno 3
    [1, 2, 3], ['a', 'b', 'c'], [true, false, true]
];
// Imprimir la tercera letra del segundo arreglo (la letra c)
console.log(arregloPrincipal[1][2]);

// Ahora, hablemos sobre aplanar arreglos. Imagina que tienes muchos arreglos
// dentro de un gran arreglo, y solo te interesan los valores de esos 
// arreglos internos, sin importar cuántos arreglos haya dentro de otros
// arreglos. La función que necesitamos aquí hace precisamente eso. 

// Básicamente, revisamos cada elemento del gran arreglo y, si encontramos
// un arreglo, también revisamos esos valores internos y uno a uno, los
// vamos agregamos todos a un nuevo arreglo. Al final, obtenemos un
// único arreglo con todos los valores de los arreglos internos. 

// ¡Sé que suena como un trabalenguas, pero es realmente útil!

function aplanar(arreglo) {
    var plano = [];

    for (i=0; i < arreglo.length; i++){
        for (a=0; a < arreglo[i].length; a++){
            plano.push(arreglo[i][a])
    }
}
    return plano;
}
var resultado = aplanar( [ ["d", "i", "s"], ["t", "a", "n"], ["c", "i", "a"] ] );
console.log(resultado);