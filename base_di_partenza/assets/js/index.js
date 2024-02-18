document.addEventListener("DOMContentLoaded", function() {
    let header = document.getElementById("main-header");

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        let inputButton = document.getElementById("blackstart");
        

        if (scrollPosition > 80) {
            header.classList.remove("yellow");
            header.classList.add("white");
            inputButton.style.backgroundColor ="#1a8917";
        } else {
            header.classList.remove("white");
            header.classList.add("yellow");
            inputButton.style.backgroundColor ="black";
        }
    });
});