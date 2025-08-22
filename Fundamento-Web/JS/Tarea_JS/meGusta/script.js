

const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const likeCounter = button.parentElement.querySelector(".like-count");
        let like = parseInt(likeCounter.textContent);
        like++;
        likeCounter.textContent = like;
    });
});