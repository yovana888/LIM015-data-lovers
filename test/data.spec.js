import {filterBySearch} from '../src/data.js';
/* -------- Filtrado por search -------*/
describe('filterBySearch', () => {
  const search = "totoro";
  const ghibliData = {"films": [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
    },
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
    }
  ] };
  const dataFilterSearch = [
    {"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro"}
  ];

  it('is a function', () => {
    expect(typeof filterBySearch).toBe('function');
  });

  it('decería retornar la información de My Neighbor Totoro', () => {
    expect(filterBySearch(search,ghibliData)).toEqual(dataFilterSearch);
  });
});


