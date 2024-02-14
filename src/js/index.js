const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
open.addEventListener("click", () => {
   nav.style.display = "block"
   open.style.display = "none"
})
close.addEventListener("click", () => {
    nav.style.display = "none"
    open.style.display = "block"
})