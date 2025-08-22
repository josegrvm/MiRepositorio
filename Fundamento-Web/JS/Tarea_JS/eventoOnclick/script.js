


let botton = document.getElementById("button-header");
    botton.addEventListener("click", function() {
    botton.innerText = "Cerrar sesion";
});


function deleteElement(){
    let buttonEL = document.getElementById("button-aside");
    buttonEL.remove();
}

function mostrarAlert1(){
    alert("Gato Atigrado was liked");
}

function mostrarAlert2(){
    alert("Golden Retriever was liked");
}


let like = 22;
    let buttonLike1 = document.getElementById("buttonLike1");
    let likeCountSpan= document.getElementById("like");
    buttonLike1.addEventListener("click", () => {
        like++; 
        likeCountSpan.innerText = like;
});

let like2 = 45;
    let buttonLike2 = document.getElementById("buttonLike2");
    let likeCountSpan2= document.getElementById("like2");
    buttonLike2.addEventListener("click", () => {
        like2++; 
        likeCountSpan2.innerText = like2;
});
