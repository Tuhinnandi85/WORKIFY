const navItem = document.querySelector(".nav-item");
const navLink = document.querySelector(".nav-item .navlink");

navLink.addEventListener("click", (e) => {
    e.preventDefault(); // stop # link jump
    navItem.classList.toggle("active");
});