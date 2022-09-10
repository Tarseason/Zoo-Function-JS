const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Testa o dia Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Testa Tuesday se ta aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Testa Wednesday fechado no horario noturno 9 da noite', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Testa se entrada esta certa sem abreviação', () => {
    expect(getOpeningHours('Thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se abreviatura AM/PM esta correto', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa a entrada de entrada de hora', () => {
    expect(getOpeningHours('Saturday', 'C9:00')).toThrow('The hour should represent a number');
  });
  it('Tasta a hora de entrada do usuario', () => {
    expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
