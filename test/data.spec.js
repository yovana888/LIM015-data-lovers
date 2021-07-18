import { filterBySearch, filterByDirector, filterByProducer, filterBySort } from '../src/data.js';
/* -------- Filtrado por search -------*/
describe('filterBySearch', () => {
    it('is a function filterBySearch', () => {
        expect(typeof filterBySearch).toBe('function');
    });

    it("Debería retornar `My Neighbor Totoro`", () => {
        const dataPrueba = [{ title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }];
        expect(filterBySearch(`totoro`, dataPrueba)).toEqual([
            { title: "My Neighbor Totoro" }
        ]);
    });
});

/* -------- Filtrado por director -------*/
describe('filterByDirector', () => {
    it('is a function filterByDirector', () => {
        expect(typeof filterByDirector).toBe('function');
    });
    it("Debería retornar `Yoshifumi Kondō`", () => {
        const dataPrueba = [{ director: "Yoshifumi Kondō", title: "Whisper of the Heart" }, { director: "Hayao Miyazaki", title: "Castle in the Sky" }];
        expect(filterByDirector(`Yoshifumi Kondō`, dataPrueba)).toEqual([
            { director: "Yoshifumi Kondō", title: "Whisper of the Heart" }
        ]);
    });
});

/* -------- Filtrado por productor -------*/
describe('filterByProducer', () => {
    it('is a function filterByProducer', () => {
        expect(typeof filterByProducer).toBe('function');
    });
    it("Debería retornar `Toru Hara`", () => {
        const dataPrueba = [{ producer: "Toru Hara", title: "Grave of the Fireflies" }, { producer: "Isao Takahata", title: "Castle in the Sky" }];
        expect(filterByProducer(`Toru Hara`, dataPrueba)).toEqual([
            { producer: "Toru Hara", title: "Grave of the Fireflies" },
        ]);
    });
});

/* -------- Filtrado por sort -------*/
describe('filterBySort', () => {
    it('is a function filterBySort', () => {
        expect(typeof filterBySort).toBe('function');
    });

    it("Debería retornar `BestRated` ordenado", () => {
        const dataPrueba = [{ rt_score: "95", title: "Castle in the Sky" }, { rt_score: "100", title: "Only Yesterday" }];
        expect(filterBySort(`BestRated`, dataPrueba)).toEqual([
            { rt_score: "100", title: "Only Yesterday" }, { rt_score: "95", title: "Castle in the Sky" }
        ]);
    });

    it("Debería retornar `MostRecent` ordenado", () => {
        const dataPrueba = [{ release_date: "1986", title: "Castle in the Sky" }, { release_date: "1988", title: "My Neighbor Totoro" }];
        expect(filterBySort(`MostRecent`, dataPrueba)).toEqual([
            { release_date: "1988", title: "My Neighbor Totoro" }, { release_date: "1986", title: "Castle in the Sky" }
        ]);
    });


    it("Debería retornar `TheOldest` ordenado", () => {
        const dataPrueba = [{ release_date: "1988", title: "My Neighbor Totoro" }, { release_date: "1986", title: "Castle in the Sky" }];
        expect(filterBySort(`TheOldest`, dataPrueba)).toEqual([
            { release_date: "1986", title: "Castle in the Sky" }, { release_date: "1988", title: "My Neighbor Totoro" }
        ]);
    });
    
    it("Debería retornar `totalCharacters` ordenado por lenght de people", () => {
        const dataPrueba = [{ people: [{"name": "Takashi Yamada"}] }, { people: [{"name": "Chihiro Ogino/Sen"},{"name": "Cat King"}] }];
        expect(filterBySort(`totalCharacters`, dataPrueba)).toEqual([
            { people: [{"name": "Chihiro Ogino/Sen"},{"name": "Cat King"}] },{ people: [{"name": "Takashi Yamada"}] }
        ]);
    });

    /*-----------  Descomentamos los de abajo si usamos el operador ternario ---------*/

    it("Debería retornar `a-z` ordenado", () => {
        const dataPrueba = [{ title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }];
        expect(filterBySort(`a-z`, dataPrueba)).toEqual([
            { title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }
        ]);
    });

    /*  it("Debería retornar `a-z`igual", () => {
       const dataPrueba = [{title: "Castle in the Sky"},{title: "Castle in the Sky"}];
       expect(filterBySort(`a-z`, dataPrueba)).toEqual([
         {title: "Castle in the Sky"},{title: "Castle in the Sky"}
       ]);
     }); */

    it("Debería retornar `z-a` ordenado", () => {
        const dataPrueba = [{ title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }];
        expect(filterBySort(`z-a`, dataPrueba)).toEqual([
            { title: "My Neighbor Totoro" }, { title: "Castle in the Sky" }
        ]);
    });

    /* it("Debería retornar `z-a` tal cual", () => {
      const dataPrueba = [{title: "My Neighbor Totoro"},{title: "Castle in the Sky"}];
      expect(filterBySort(`z-a`, dataPrueba)).toEqual([
        {title: "My Neighbor Totoro"},{title: "Castle in the Sky"}
      ]);
    }); */

});