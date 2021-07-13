/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { filterBySearch, filterByDirector, filterByProducer, filterBySort } from './data.js';
import { showData, allData } from './template.js';

const cardsList = document.querySelector("#cardsList");
const selectDirector = document.querySelector("#directors");
const selectProducer = document.querySelector("#producers");
const selectSort = document.querySelector("#sort");
const ghibliNotFound = document.querySelector("#ghibli-notFound");
const inputTypeSearch = document.querySelector("input[type=search]");
const mainCards = document.querySelector("#main-cards");
const mainFilms = document.querySelector("#main-film");
const homeLogo = document.querySelector("#home-logo");
const homeMovies = document.querySelector("#show-section");
let inputSearch = document.querySelector("#search");


// Funcion Cargar Data en Card
function loadData(data) {
    cardsList.innerHTML = '';
    for (let key in data) {
        cardsList.appendChild(showData(data[key]));
    }
}

// Cargar Toda la Data al inicio
window.addEventListener("load", () => {
    loadData(allData);
});

// Filtrar Data por Search
inputSearch.addEventListener('keyup', () => {
    let search = inputSearch.value;
    ghibliNotFound.style.display = 'none';
    if (search.length == 0) {
        loadData(allData);
    } else {
        let dataFilterSearch = filterBySearch(search, allData);
        if (dataFilterSearch.length == 0) {
            cardsList.innerHTML = '';
            ghibliNotFound.style.display = 'block';
        } else {
            loadData(dataFilterSearch);
        }
    }
});

// Volver a cargar toda la Data cuando haga click en la x interna de un input de tipo search
inputTypeSearch.addEventListener('search', () => {
    loadData(allData);
    ghibliNotFound.style.display = 'none';
});

// Filtrar Data por Director
selectDirector.addEventListener("change", () => {
    let director = selectDirector.value;
    if (director == 'directors') {
        loadData(allData);
    } else {
        let dataFilterDirector = filterByDirector(director, allData);
        loadData(dataFilterDirector);
    }
});

// Filtrar Data por Productor
selectProducer.addEventListener("change", () => {
    let producer = selectProducer.value;
    if (producer == 'producers') {
        loadData(allData);
    } else {
        let dataFilterProducer = filterByProducer(producer, allData);
        loadData(dataFilterProducer);
    }
});

//Ordenar Data 

selectSort.addEventListener("change", () => {
    let sort = selectSort.value;
    if (sort == 'sort') {
        loadData(allData);
    } else {
        let dataSort = filterBySort(sort, allData);
        loadData(dataSort);
    }
});

//Ocultar el Main de Detalle de las Peliculas

homeLogo.addEventListener("click", () => {
    mainFilms.style.display = 'none';
    mainCards.style.display = 'block';
});
homeMovies.addEventListener("click", () => {
    mainFilms.style.display = 'none';
    mainCards.style.display = 'block';
});


/*------------ Estadísticas del modal con ChartData.js----------- */
let x = []; //Aqui se gardaran los score de las peliculas y sera la data para nuestro eje x
let y = []; //Aqui se gardaran los titulos de las peliculas y sera la data para nuestro eje y
let dataSortChart = filterBySort('BestRated', allData);
let dataTopTen = dataSortChart.filter((_, i) => i < 10); //El subguion es por que no estamos usando los values
//Alamacenamos con push los valores que nos importan de nuestro objeto dataTopTen
for (let key in dataTopTen) {
    y.push(dataTopTen[key].title);
    x.push(dataTopTen[key].rt_score);
}

x.push(91); //valor inicial en nuestro graficos
y.push("")



new Chart('chart', {
    type: 'horizontalBar',
    data: {
        labels: y,
        datasets: [{
            label: "rt_score",
            backgroundColor: "#7a6aef",
            data: x
        }]
    },
    options: {

        legend: { display: false },
        scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                    color: "#efeeee"
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }

    }
});