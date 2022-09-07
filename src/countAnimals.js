const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, animalia) => {
      acc[animalia.name] = animalia.residents.length;
      console.log(acc);
      return acc;
    }, {});
  }
  if (animal.specie && animal.sex) {
    return data.species.find((elemento) => elemento.name === animal.specie).residents
      .filter((element) => element.sex === animal.sex).length;
  }
  return data.species.find((elemento) => elemento.name === animal.specie).residents.length;
}
// referencia do reduce a seguir
// https://www.youtube.com/watch?v=tU5EOsJN0w4
module.exports = countAnimals;
