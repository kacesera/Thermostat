describe('Thermostat', () => {

  // <!-- Thermostat starts at 20 degrees -->
  beforeEach(() => {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', () => { 
    expect(thermostat.temp).toEqual('20 degrees');
  })

})