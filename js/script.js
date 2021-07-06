
let menu_btn = document.querySelector(".bars-icon"),
    navbar = document.querySelector(".navbar");

menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle("active")
    navbar.classList.toggle("active")
})

    