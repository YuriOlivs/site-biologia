const navBar = document.getElementById("navbar"), 
    navList = document.getElementById("navList"),
    navListPosition = navList.getAttribute("left"),
    mobileMenu = document.getElementById("mobileMenu"),
    verMais = document.getElementById("verMais"),
    target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 1);

    verMais.classList.toggle("display-none", scrollY > 0);
    navBar.classList.toggle("navbar-active", scrollY >  0)

    target.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })    
}

const mobileNavbar = () => {
    if(navListPosition == 0) {
        navList.classList.remove("nav-list-active")
    }  else {
        navList.classList.toggle("nav-list-active")
    }
}

window.addEventListener("scroll", ativarScroll)
mobileMenu.addEventListener("click", mobileNavbar)
