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
  it('Testa se o parametro da funcao computeData esta incorreto', () => {
    expect(handlerElephants('')).toEqual(null);
  });
  it('Testa o retorno da localização dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Testa entrada divergente da funcao handlerElephants', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Testa o retorno de um array de dias possiveis para visita aos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
