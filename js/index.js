const navBar = document.getElementById("navbar"), 
    navList = document.getElementById("navList"),
    navListPosition = navList.getAttribute("left"),
    line1 = document.getElementById("line1"),
    line2 = document.getElementById("line2"),
    line3 = document.getElementById("line3"),
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
        line1.classList.remove("line1-active")
        line2.classList.remove("line2-active")
        line3.classList.remove("line3-active")
    }  else {
        navList.classList.toggle("nav-list-active")
        line1.classList.toggle("line1-active")
        line2.classList.toggle("line2-active")
        line3.classList.toggle("line3-active")
    }

}

window.addEventListener("scroll", ativarScroll)
mobileMenu.addEventListener("click", mobileNavbar)
