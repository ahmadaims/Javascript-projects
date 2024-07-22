let navbar=document.getElementById("navbar");
let hamBurger=document.getElementById("hamburger");
let socialIcons=document.getElementById("social-icons");
let navContainer=document.querySelector(".nav-container");

if(navbar.classList.contains("hide")){
   hamBurger.addEventListener('click', function(){
     navbar.classList.toggle("show") ;
     navContainer.style.top="90px";
     navContainer.style.zIndex="1";
   })
}