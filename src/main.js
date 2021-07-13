/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {filterBySearch, filterByDirector, filterByProducer, filterBySort } from './data.js';
import {showData,allData} from './template.js';

const cardsList = document.querySelector("#cardsList");
const selectDirector = document.querySelector("#directors");
const selectProducer = document.querySelector("#producers");
const selectSort = document.querySelector("#sort");
const ghibliNotFound = document.querySelector("#ghibli-notFound");
const inputTypeSearch = document.querySelector("input[type=search]");
const mainCards = document.querySelector("#main-cards");
const mainFilms = document.querySelector("#main-film");
const homeLogo = document.querySelector("#home-logo");
const homeMovies=document.querySelector("#show-section");
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
let x = [];
let y = [];
let dataSortChart = filterBySort('BestRated', allData);
let dataTopTen = dataSortChart.filter((film, i) => i<10);
for(let key in dataTopTen){
     x.push(dataTopTen[key].title);
     y.push(dataTopTen[key].rt_score);
}

const data = { 
    labels: x,
    datasets: [{
      label: "Movies",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: y,
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)"
            }
        }],
    xAxes: [{
        gridLines: {
            display: false
        }
    }]
   }
};

Chart.Bar('chart', {
    type: "horizontalBar",
    options: options,
    data: data
});
  