document.querySelector(".btn").addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach((item) => {
        item.classList.toggle("showing");
    })
});