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
    expect(galacticAge.mercurialYears()).toEqual(125);
  });

  test('should convert terrestrialAge property of galacticAge object to Venusian age', () => {
    expect(galacticAge.venusianYears()).toEqual(48);
  });

  test('should convert terrestrialAge property of galacticAge object to Martian age', () => {
    expect(galacticAge.martianYears()).toEqual(16);
  });

  test('should convert terrestrialAge property of galacticAge object to Jovian age', () => {
    expect(galacticAge.jovianYears()).toEqual(2);
  });

  test('should subtract inputted user age in Terrestrial years from average life expectancy in Terrestrial years', () => {
    expect(galacticAge.terrestrialYearsLeft()).toEqual(42);
  });

  test('should add planetaryAges property containing array of ages in other planetary years to galacticAge object', () => {
    galacticAge.planetaryAges();
    expect(galacticAge.planetaryAges).toEqual([125,48,16,2]);
  });

});