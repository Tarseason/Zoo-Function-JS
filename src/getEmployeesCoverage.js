const data = require('../data/zoo_data');

const { species, employees } = data;

const algo = (abc) => species.filter(({ id }) => abc.includes(id)).map((elemento) => elemento.name);

const alg = (loc) => species.filter(({ id }) => loc.includes(id))
  .map((elemento) => elemento.location);

const retornaAll = () => {
  const nomea = employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const obj = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: algo(responsibleFor),
      locations: alg(responsibleFor),
    };
    return obj;
  });
  return nomea;
};

function getEmployeesCoverage(entrada) {
  if (!entrada) {
    return retornaAll();
  }
  const entradaMesmo = employees
    .find(({ id, firstName, lastName }) => (firstName === entrada.name
      || lastName === entrada.name) || (id === entrada.id));

  if (!entradaMesmo) throw new Error('Informações inválidas');

  const objSaida = {
    id: entradaMesmo.id,
    fullName: `${entradaMesmo.firstName} ${entradaMesmo.lastName}`,
    species: algo(entradaMesmo.responsibleFor),
    locations: alg(entradaMesmo.responsibleFor),
  };
  return objSaida;
}

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
