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
    drawChart();
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


/*--------------------- Estadísticas del modal con ChartData.js ----------------- */

function drawChart() {
    let x = [];
    let y = [];
    let dataOrderLenghtPeople = filterBySort('totalCharacters', allData);
    for (let key in dataOrderLenghtPeople) {
        let totalCharacters = dataOrderLenghtPeople[key].people.length;
        x.push(totalCharacters);
        y.push(dataOrderLenghtPeople[key].title);
    }

    //Dibujamos el Grafico

    new Chart('chart-canva', {
        type: 'horizontalBar',
        data: {
            labels: y,
            datasets: [{
                backgroundColor: "#a18bf8",
                data: x
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        color: "#efeeee",
                    },
                    ticks: {
                        min: 4,
                        max: 13
                    },
                }],
                yAxes: [{
                    barPercentage: 0.9,
                    padding: 10,
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

}