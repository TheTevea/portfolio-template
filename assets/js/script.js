const burgerMenu = document.querySelector('.burger-button');
const closeMenu = document.querySelector('.close-button');
const navBar = document.querySelector('.menu');
const icon = burgerMenu.querySelector(".ri-menu-fill");
const menu_items = document.querySelectorAll(".menu li a");

burgerMenu.addEventListener("click", function(){
    navBar.classList.toggle("toogle");
    checkIcon();
});

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        checkIcon();
        navBar.classList.toggle("toogle");
    })
})

const checkIcon = ()=>{
    if(icon.classList.contains("ri-menu-fill")){
        icon.classList.replace("ri-menu-fill","ri-close-line");
    }
    else{
        icon.classList.replace("ri-close-line","ri-menu-fill");
    }
}