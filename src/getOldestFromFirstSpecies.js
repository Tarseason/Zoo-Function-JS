const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const a = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const b = data.species.find((elemento) => elemento.id === a).residents
    .sort((age1, age2) => age2.age - age1.age)[0];
  return Object.values(b);
}

module.exports = getOldestFromFirstSpecies;
