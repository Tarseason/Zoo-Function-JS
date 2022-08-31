const data = require('../data/zoo_data');

function isManager(id) {
  const manTuE = data.employees.find((algo) => algo.id === id);
  if (manTuE.managers.length < 2) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((elemento) => elemento.managers.includes(managerId))
    .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);

}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };
