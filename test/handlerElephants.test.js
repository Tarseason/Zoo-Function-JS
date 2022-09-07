const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa quantia de animais', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa o retorno de um array de nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa a media da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa o retorno da localização dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Testa a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Testa o retorno de um array de dias possiveis para visita aos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
