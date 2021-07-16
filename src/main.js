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
const statistics= document.getElementById("statistics");

// Funcion Cargar Data en Card
function loadData(data) {
    cardsList.innerHTML = '';
    for (let key in data) {
        cardsList.appendChild(showData(data[key]));
    }
    axisChart();
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

statistics.addEventListener('change',()=>{
    axisChart();
});

function axisChart(){
    let valueSelect=statistics.value;
    let x = [];
    let y = [];
    let idChart;
    if(valueSelect=='top-ten'){
        let dataOrderScore = filterBySort('BestRated', allData); //Ordenamos de mayor a menor score
        for (let key in dataOrderScore) {
            if (key < 10) {
                y.push(dataOrderScore[key].title);
                x.push(dataOrderScore[key].rt_score);
            } else {
                break; //rompe el el ciclo
            }
        }
        idChart ="chart-one";
    }else{
        for (let key in allData){
            let totalCharacters= allData[key].people.length;
            x.push(totalCharacters);
            y.push(allData[key].title);
        }
        idChart = "chart-two";
    }
    drawChart(x,y,idChart);
}
function drawChart(x,y,idChart){
    let min;
    let max;
    let canvaOcultar;
    if( idChart == "chart-one"){
        min=90;
        max=100;
        canvaOcultar="chart-two";
    }else{
        min=4;
        max=13;
        canvaOcultar="chart-one";
    }
    new Chart(idChart, {
        type: 'horizontalBar',
        data: {
            labels: y,
            datasets: [{
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
                        color: "#efeeee",
                    },
                    ticks: {
                        min: min,
                        max: max
                    },
                }],
                yAxes: [{
                    barPercentage: 0.7,
                    padding:10,
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
    document.getElementById(idChart).style.display="block";
    document.getElementById(canvaOcultar).style.display="none";
}