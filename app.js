const menuBurger = document.querySelector("header .menu-bar");
const navMenu = document.querySelector("header nav");

menuBurger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBurger.classList.toggle("active");
})

document.querySelectorAll("header nav ul li a").forEach(n => {
    n.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBurger.classList.remove("active");
    })
});

document.querySelector("header a.logo").addEventListener("click", () => {
    if (navMenu.classList.contains("active") && menuBurger.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuBurger.classList.remove("active");
    }
})