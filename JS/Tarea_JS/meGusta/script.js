

//  Seleccionamos todos los botones de like
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        //  Encontrar el contador de likes dentro del mismo post
        const likeCounter = button.parentElement.querySelector(".like-count");
        //  obtener el numero actual
        let like = parseInt(likeCounter.textContent);
        //  Aumentar en 1
        like++;
        //  Actualizar el texto
        likeCounter.textContent = like;
    });
});