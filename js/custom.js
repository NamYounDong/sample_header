window.onload = function(){
    // menu toggle
    const menu = document.querySelector(".menu");
    const icon = menu.querySelectorAll(".menu i")

    const menuNav = document.querySelector(".menu_navi");
    

    menu.addEventListener("click", function(){
        this.classList.toggle("active");
        menuNav.classList.toggle("active");
        console.log(0)
    });

}
