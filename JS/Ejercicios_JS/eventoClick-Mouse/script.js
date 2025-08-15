
//   CLICK

document.getElementById("comidaSelect").addEventListener("change", function() {
    elegirComida(this.value);
});

function elegirComida(comida) {
    alert("¡Has elegido " + comida + "!");
}


//.   MOUSE  

var nameTag = document.querySelector("#name-tag");
var nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("input", function() {
    cambiarNombre(this.value);
});

function cambiarNombre(nombre) {
    nameTag.innerText = nombre;
}