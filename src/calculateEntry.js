const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const entrant = [
// 	{ name:  'Lara Carvalho', age:  5 },
// 	{ name:  'Frederico Moreira', age:  5 },
// 	{ name:  'Pedro Henrique Carvalho', age:  5 },
// 	{ name:  'Maria Costa', age:  18 },
// 	{ name:  'Núbia Souza', age:  18 },
// 	{ name:  'Carlos Nogueira', age:  50 },
// ];

function countEntrants(entrants) {
  const visitantes = {
    child: entrants.filter((elemento) => elemento.age < 18).length,
    adult: entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length,
    senior: entrants.filter((elemento) => elemento.age >= 50).length,
  };
  return visitantes;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);

  const menores = visitors.child * prices.child;
  const jovens = visitors.adult * prices.adult;
  const velhinhos = visitors.senior * prices.senior;
  const faturamento = menores + jovens + velhinhos;
  return faturamento;
}

module.exports = { calculateEntry, countEntrants };
