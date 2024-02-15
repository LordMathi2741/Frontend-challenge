const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
open.addEventListener("click", () => {
    nav.classList.add("visible");
    open.classList.add("visible")
})
close.addEventListener("click", () => {
   nav.classList.remove("visible")
   open.classList.remove("visible")
})