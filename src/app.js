addEventListener('DOMContentLoaded', () => {
    /*---- botón de hamburguesa ---- */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        })
    /*------ botón de filtros ---- */
    const iconFilter = document.querySelector('.icon-filter');
    const navFilter = document.querySelector('.input-data-selector');
    iconFilter.addEventListener('click', () => {
        navFilter.classList.toggle('show-filter');
    })

    /*----- botón de movies ---- */
    const showSection = document.getElementById('show-section')
    showSection.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('show');
        })
    /*---- botón de modal---- */
    const openModal = document.getElementById('open-modal');
    const modalContainer = document.querySelector('.modal-container');
    openModal.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('show');
            modalContainer.classList.add('show-modal');
        })
    /*----botón del cierre modal---- */
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', () => {
        modalContainer.classList.remove('show-modal');
    })
})



/* Inicio Codigo Slider */

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);


function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 2500)
    }
}
/* Fin Codigo Slider */
/* Inicio  -----------------------------*/