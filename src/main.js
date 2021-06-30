/* import { example } from './data.js';
console.log(example, data);
 */
import dataGhibli from './data/ghibli/ghibli.js';
/* import data from './data.js'; */
const getAlldata= dataGhibli.films;

window.addEventListener("load", function() {
    for (let i = 0; i < getAlldata.length; i++) {
        var addHtml ='<div class="card">'
        +'<div class="card-contenido">'
        +'<div class="card-img">'
        +'<img src="https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg">'
        +'</div>'
        +'<div class="text-card ">'
        +'<label>'+getAlldata[1].title+'</label>'
        +'<p class="text-sumary">Lorem ipsum dolor sit amet adipisicing elit. Fugit ducimus, veniam fugiat aliquid autem modi odio id necessitatibus distinctio nulla beatae fugiat aliquid autem modi ...</p>'
        +' <label class="text-sumary">Director: Hayao Miyazaki</label>'
        +'<label class="text-sumary">Productor: Hayao Miyazaki</label>'
        +'</div>'
        +'</div>'
        +'</div>';
    }
    document.getElementById("cardsList").innerHTML = addHtml;  

 });