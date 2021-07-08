import dataGhibli from './data/ghibli/ghibli.js';
const allData = dataGhibli.films;
const mainCards = document.querySelector("#main-cards");
const mainFilms = document.querySelector("#main-film");
const imgFilm = document.querySelector("#img-film");
const titleFilm = document.querySelector("#title-film");
const directorFilm = document.querySelector("#director-film");
const producerFilm = document.querySelector("#producer-film");
const synopsisFilm = document.querySelector("#synopsis-film");
const yearFilm = document.querySelector(".year-film");
const scoreFilm = document.querySelector(".score-film");
const containerLocation = document.querySelector("#container-location");
const containerCharacter = document.querySelector("#container-characters");
const containerVehicles = document.querySelector("#container-vehicles");


export const showData = (data) => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";

    let description = data.description;
    let shortDescription = description.split(" ", 30).join(" ");

    const templateCard =
        `<div class="card-contenido" id="${data.id}">
          <div class="card-img" >
              <img src="${data.poster}">
              <span class="year-card"> ${data.release_date}</span>
              <span class="score-card"> ${data.rt_score}<i class="fas fa-star"></i></span>
          </div>
          <div class="text-card">
              <h1 class="title-card">${data.title}</h1>
              <p class="text-sumary">${shortDescription}...</p>
              <p class="text-sumary maker">Director: ${data.director}</p>
              <p class="text-sumary maker">Producer: ${data.producer}</p>
          </div>
        </div>`;

    cardElement.innerHTML = templateCard;
    cardElement.addEventListener('click', () => {
        let id = cardElement.firstChild.id;
        showMore(id);
    })
    return cardElement;
}

function showMore(id) {

    let dataFilm = allData.filter(film => film.id == id);
    imgFilm.src = dataFilm[0].poster;
    titleFilm.innerHTML = dataFilm[0].title;
    yearFilm.innerHTML = dataFilm[0].release_date;
    scoreFilm.innerHTML = dataFilm[0].rt_score;
    directorFilm.innerHTML = dataFilm[0].director;
    producerFilm.innerHTML = dataFilm[0].producer;
    synopsisFilm.innerHTML = dataFilm[0].description;


    const dataLocation = dataFilm[0].locations;
    containerLocation.innerHTML = "";
    for (let key in dataLocation) {
        const locationElement = document.createElement('div');
        locationElement.className = 'locations-detail-box';
        let residents = dataLocation[key].residents;
        let templateLocation =
            `<div class="img-locations-box">
                ${dataLocation[key].img=="" ? `<img src="./img/not-found.jpg" alt="" class="img-locations">` : `<img src="${dataLocation[key].img}" alt="" class="img-locations">`}    
            </div>
            <div class="details-container locationsDetails">
                <p class="text-name">${dataLocation[key].name}</p>
                <p class="text"><span class="span-black">Climate:</span>${dataLocation[key].climate}</p>
                <p class="text"><span class="span-black">Terrain:</span>${dataLocation[key].terrain}</p>
                <p class="text"><span class="span-black">Surface water:</span>${dataLocation[key].surface_water}</p>
                <p class="text"><span class="span-black">Residents:</span> ${residents.map(i => i.name).join(",")}</p>
            </div>`;
        locationElement.innerHTML=templateLocation;
        containerLocation.appendChild(locationElement);
    }   

    const dataCharacters = dataFilm[0].people;
    containerCharacter.innerHTML = "";
    for(let key in dataCharacters){
      const charactersElement = document.createElement('div');
      charactersElement.className='characters-detail-box';
      let templateCharacter=
        `<div class="img-character-box">
            ${dataCharacters[key].img=="" ? `<img src="./img/not-found.jpg" alt="" class="img-character">` : `<img src="${dataCharacters[key].img}" alt="" class="img-character">`}
        </div>
        <div class="details-container">
            <p class="text-name">${dataCharacters[key].name}</p>
            <p class="text"><span class="span-black"> Gender:</span>${dataCharacters[key].gender}</p>
            <p class="text"><span class="span-black"> Age:</span>${dataCharacters[key].age}</p>
            <p class="text"><span class="span-black">Specie:</span>${dataCharacters[key].specie}</p>
            <p class="text"><span class="span-black">Eye color:</span>${dataCharacters[key].eye_color}</p>
            <p class="text"><span class="span-black">Hair color:</span>${dataCharacters[key].hair_color}</p>
        </div>`
       charactersElement.innerHTML=templateCharacter;
       containerCharacter.appendChild(charactersElement);
    }

    const dataVehicles = dataFilm[0].vehicles;
    containerVehicles.innerHTML = "";
    for(let key in dataVehicles){
      const vehiclesElement = document.createElement('div');
      vehiclesElement.className='vehicles-detail-box';
      let pilots = dataVehicles[key].pilot;
      let templateVehicles =
      `<div class="img-vehicles-box">
          <img src="${dataVehicles[key].img}" alt="" class="img-vehicles">
       </div>
       <div class="details-container vehiclesDetails">
          <p class="text-name">${dataVehicles[key].name}</p>
          <p class="text description"><span class="span-black">Description:</span>${dataVehicles[key].description}</p>
          <p class="text"><span class="span-black">Vehicle class:</span>${dataVehicles[key].vehicle_class}</p>
          <p class="text"><span class="span-black">Length:</span>${dataVehicles[key].length}</p>
          <p class="text"><span class="span-black">Pilot:</span>${pilots.name}</p>
      </div>`
      vehiclesElement.innerHTML= templateVehicles;
      containerVehicles.appendChild(vehiclesElement);
    }

    window.scroll(0,0);
    mainCards.style.display='none';
    mainFilms.style.display='block';
}

export const filterBySearch = (search, allData) => {
    let searchConverted = search.toLowerCase();
    let dataFilterSearch = allData.filter(characters => characters.title.toLowerCase().includes(searchConverted));
    return dataFilterSearch;
}

export const filterByDirector = (director, allData) => {
    let dataFilter = allData.filter(film => film.director == director);
    return dataFilter;
}

export const filterByProducer = (producer, allData) => {
    let dataFilter = allData.filter(film => film.producer == producer);
    return dataFilter;
}

export const filterBySort = (sort, allData) => {
    let dataSort;
    switch (sort) {
        case 'BestRated':
            {
                dataSort = allData.sort((film1, film2) => {
                    return film2.rt_score - film1.rt_score;
                });
                break;
            }
        case 'MostRecent':
            {
                dataSort = allData.sort((film1, film2) => {
                    return film2.release_date - film1.release_date;
                });
                break;
            }
        default:
            {
                dataSort = allData.sort((film1, film2) => {
                    return film1.release_date - film2.release_date;
                });
                break;
            }
    }
    return dataSort;
}