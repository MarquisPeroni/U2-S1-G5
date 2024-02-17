document.addEventListener("DOMContentLoaded", function() {
    let header = document.getElementById("main-header");

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 80) {
            header.classList.remove("yellow");
            header.classList.add("white");
        } else {
            header.classList.remove("white");
            header.classList.add("yellow");
        }
    });
});