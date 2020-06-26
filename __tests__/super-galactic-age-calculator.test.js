import { GalacticAge } from './../src/super-galactic-age-calculator.js';

describe('CalculateAge', () => {
  let galacticAge;
  beforeEach(() => {
    galacticAge = new GalacticAge(30);
  });

  test('should create a galacticAge object with a terrestrialAge property', () => {
    expect(galacticAge.terrestrialAge).toEqual(30);
  });

  test('should convert terrestrialAge property of galacticAge object to Mercurial age', () => {
    expect(galacticAge.mercurialAge()).toEqual(125);
  });

  test('should convert terrestrialAge property of galacticAge object to Venusian age', () => {
    expect(galacticAge.venusianAge()).toEqual(48);
  });

  test('should convert terrestrialAge property of galacticAge object to Martian age', () => {
    expect(galacticAge.martianAge()).toEqual(16);
  });

  test('should convert terrestrialAge property of galacticAge object to Jovian age', () => {
    expect(galacticAge.jovianAge()).toEqual(2);
  });

});