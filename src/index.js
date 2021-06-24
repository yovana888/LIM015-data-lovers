addEventListener('DOMContentLoaded',() =>{
    const navToggle=document.querySelector('.nav-toggle')
    if(navToggle){
        navToggle.addEventListener('click',() =>{
            const navMenu=document.querySelector('.nav-menu')
            navMenu.classList.toggle('show')
        })
    }
})

const categories =document.getElementById('nav-menu-list');
categories.addEventListener('click',() =>{
    const navCategories=document.querySelector('.nav-categories')
    navCategories.style.display="block";
})