const navBar = document.getElementById("navbar"), 
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

window.addEventListener("scroll", ativarScroll)