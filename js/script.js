const nav= document.querySelector("#nav__mobile");
const open_nav = document.querySelector("#nav__open");
const close__nav=document.querySelector("#nav__close")

/* agrego los listening necesarios para que aparezca y desaparezca los iconos del nav bar */
open_nav.addEventListener("click",() => {
    nav.classList.add("nav__visible");
    open_nav.classList.add("nav__open--hidden");
    close__nav.classList.add("nav__button");
});

close__nav.addEventListener("click",() => {
    nav.classList.remove("nav__visible");
    close__nav.classList.remove("nav__button");
    open_nav.classList.add("nav__open--visible");
});