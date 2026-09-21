window.addEventListener("scroll", function() {

    let navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "darkblue";
    } else {
        navbar.style.backgroundColor = "black";
    }

});