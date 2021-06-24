addEventListener('DOMContentLoaded',() =>{
    const navToggle=document.querySelector('.nav-toggle');
    if(navToggle){
        navToggle.addEventListener('click',() =>{
            const navMenu=document.querySelector('.nav-menu');
            navMenu.classList.toggle('show');
        })
    }
})
let change=false;
const categories =document.getElementById('nav-menu-list');
categories.addEventListener('click',() =>{
    const navCategories=document.querySelector('.nav-categories');
   if (change==false){
    navCategories.style.display="block";
    change=true;
   }else {
    navCategories.style.display="none";
    change=false;
   }
})