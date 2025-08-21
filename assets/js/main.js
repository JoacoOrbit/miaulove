const catCat = document.querySelectorAll(".cat-selector-btn");

catCat.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("selected");
    })
});

const likeBtn = document.querySelectorAll(".like-btn")

likeBtn.forEach(element => {
    element.addEventListener("click", () => {
        let likeSpan = element.querySelector(".like-counter")
        likes = parseInt(likeSpan.textContent);
        if (isNaN(likes)) {likes = 0;}
        likes++;
        likeSpan.textContent = likes;
    })
})

const logoffBtn = document.querySelector(".logoff");

logoffBtn.addEventListener("click", () => {
    alert("Sesión Cerrada Correctamente");
})