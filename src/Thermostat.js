class Thermostat {

  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
    this.powerSave = true;
  };

  increaseTemp() {
    this.temp++ ;
  };

  decreaseTemp() {
    this.temp-- ;
  };

  powerSaveOff() {
    this.powerSave = false;
    this.maxTemp = 32;
  };

  powerSaveOn() {
    this.powerSave = true;
    this.maxTemp = 25;
  };

  reset() {
    this.temp = 20;
    this.powerSaveOn();
  };

};