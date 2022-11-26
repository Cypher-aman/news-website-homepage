const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");

const toggleMenu = () => {
    header.classList.toggle("active")
}

menuBtn.addEventListener("click", () => toggleMenu());