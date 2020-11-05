describe('Thermostat', () => {

  // <!-- Thermostat starts at 20 degrees -->
  beforeEach(() => {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', () => { 
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase temp', () => {
    thermostat.increaseTemp()
    expect(thermostat.temp).toEqual(21)
  });

  it('can decrease temp', () => {
    thermostat.decreaseTemp()
    expect(thermostat.temp).toEqual(19)
  });


})