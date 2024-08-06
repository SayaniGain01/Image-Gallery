let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: 900,
        behavior: "smooth"
    });
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -900,
        behavior: "smooth"
    });
});
