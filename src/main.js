/* import { example } from './data.js';
console.log(example, data);
import data from './data.js'; 
 */
import dataGhibli from './data/ghibli/ghibli.js';
const getAlldata = dataGhibli.films;
const cardsList = document.getElementById("cardsList");

// Inicio Cargar Data 
window.addEventListener("load", () => {

    for (let key in getAlldata) {

        const card = document.createElement('div');
        card.className = "card";
        let description = getAlldata[key].description;
        let description_split = description.split(" ", 30);
        let description_corto = description_split.join(" ");
        cardsList.appendChild(card).innerHTML =

            `<div class="card-contenido">
                <div class="card-img">
                    <img src="${getAlldata[key].poster}">
                    <span class="year-card"> ${getAlldata[key].release_date}</span>
                    <span class="score-card"> ${getAlldata[key].rt_score}<i class="fas fa-star"></i></span>
                </div>
                <div class="text-card">
                    <h1 class="title-card">${getAlldata[key].title}</h1>
                    <p class="text-sumary">${description_corto}...</p>
                    <p class="text-sumary maker">Director: ${getAlldata[key].director}</p>
                    <p class="text-sumary maker">Producer: ${getAlldata[key].producer}</p>
                </div>
            </div>`;
    }

});

// Fin Cargar Data