const hamburgerToggler = document.querySelector(".hamburger")
const navlinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
    hamburgerToggler.classList.toggle("open");

    navlinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)
