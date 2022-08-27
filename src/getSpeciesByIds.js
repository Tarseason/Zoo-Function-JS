const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return [data.species.find((animal) => animal.id === ids)];
}

module.exports = getSpeciesByIds;
