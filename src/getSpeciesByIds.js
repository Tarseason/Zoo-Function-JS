const data = require('../data/zoo_data');

function getSpeciesByIds(ids, id) {
  return data.species.filter((elemento) => elemento.id === ids || elemento.id === id);
}

module.exports = getSpeciesByIds;
