window.onload = function(){
    // menu toggle
    const menu = document.querySelector(".menu");
    const icon = menu.querySelectorAll(".menu i")

    const menuItem = document.querySelector(".menu_item");

    menu.addEventListener("click", function(){
        this.classList.toggle("active");
        menuItem.classList.toggle("active");

        // this.classList.contains("active") ? console.log(1) : console.log(0);
    });

    // Navigation Activate
    const navs = document.querySelectorAll(".navi li");
    
    // forEach (배열아이템, 인덱스값)
    navs.forEach((nav, index, all) => {
        // console.log(nav, index, all)
        // console 작성법 
        console.log(`첫번째 : ${nav} - 두번째: ${index} - 세번째 : ${all}`);

        nav.querySelector("a").addEventListener("click", function(){
            navs.forEach((nav, index, all) => {
                nav.classList.remove("active");
            })
            this.parentNode.classList.add("active");
        });

    });
    // navs.forEach(function(nav, index){});
    // ----> () => {} 는 function(){}과 동일(표현 방법만 다름)
    // 그런데 왜 addEventListener에 응용하면 this를 window를 가져오는지 모르겠네..
    // this를 활용하려면 function을 사용해야 하는 듯 함.
    
}



// 화살표 함수 작성 법 ?
// 작성 예시 2가지
const sum1 = (a, b) => a+b;
const sum2 = (a, b) => {
   return a+b
};