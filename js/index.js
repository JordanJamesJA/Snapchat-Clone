const dropDown = document.querySelector(".drop-down")
const menu = document.querySelector(".menu")

dropDown.addEventListener("mouseenter", () => {menu.classList.remove("hidden")})
dropDown.addEventListener("mouseleave", () => {menu.classList.add("hidden")})