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
  return data.employees.filter((elemen2) => elemen2.managers.includes(managerId))
    .map((elemen2) => `${elemen2.firstName} ${elemen2.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
