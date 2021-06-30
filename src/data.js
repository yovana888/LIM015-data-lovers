// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */
const data= {
  getData: function() {
    fetch('ghibli.json')
    .then(res=> res.json())
    .then(data => {
      console.log(data)
    })
  }
};
export default data;
