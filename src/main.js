import { showData, filterByDirector, filterByProducer, filterBySort } from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';
const allData = dataGhibli.films;
const cardsList = document.querySelector("#cardsList");
const selectDirector = document.querySelector("#directors");
const selectProducer = document.querySelector("#producers");
const selectSort = document.querySelector("#sort");
//let inputSearch = document.querySelector("#search");

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