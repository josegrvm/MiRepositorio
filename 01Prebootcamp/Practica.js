
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

*/

var nota = 21;
var grado = "secundaria";

/* Primaria
0 - 40 Reprobado
41 - 60 Proficiente
61 -90 Excelente


    Secundaria
0 -20 Reprobado
21 - 50 Proficiente
51 - 80 Excelente
81 - 100 Sobresaliente


if(nota >= 0 && nota <= 40){
    console.log("Reprobado")

} else if( nota >= 41 && nota <= 60){
    confirm.log("Proficiente")

}else if( nota >= 61 && nota <= 90){
    console.log("Excelente")

} else if (nota >= 91 && nota <= 100) {
    console.log('excelente');

} else{
    console.log()
}
 */

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










