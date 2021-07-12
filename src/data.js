
export const filterBySearch = (search, allData) => {
    let searchConverted = search.toLowerCase();
    let dataFilterSearch = allData.filter(film => film.title.toLowerCase().includes(searchConverted));
    console.log(dataFilterSearch);
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