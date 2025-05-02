window.onload = function(){
    // menu toggle
    const menu = document.querySelector(".menu");
    const icon = menu.querySelectorAll(".menu i")

    const menuItem = document.querySelector(".menu_item");
    

    menu.addEventListener("click", function(){
        this.classList.toggle("active");
        menuItem.classList.toggle("active");
    });

}
