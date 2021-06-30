/* import { example } from './data.js';
console.log(example, data);
import data from './data.js'; 
 */
import dataGhibli from './data/ghibli/ghibli.js';
const getAlldata = dataGhibli.films;
const cardsList = document.getElementById("cardsList");

window.addEventListener("load", function() {
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
                </div>
                <div class="text-card">
                    <label>${getAlldata[key].title}</label>
                    <p class="text-sumary">${description_corto}...</p>
                    <label class="text-sumary">Director: ${getAlldata[key].director}</label>
                    <label class="text-sumary">Producer: ${getAlldata[key].producer}</label>
                </div>
            </div>`;
    }

});