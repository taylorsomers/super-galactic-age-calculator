import { GalacticAge } from './../src/super-galactic-age-calculator.js';

describe('CalculateAge', () => {
  let galacticAge;
  beforeEach(() => {
    galacticAge = new GalacticAge(30);
  });

  test('should create a galacticAge object with a terrestrialAge property', () => {
    expect(galacticAge.terrestrialAge).toEqual(30);
  });

  test('should subtract inputted user age in Terrestrial years from average life expectancy in Terrestrial years', () => {
    galacticAge.terrestrialYearsLeft();
    expect(galacticAge.terrestrialYearsLeft).toEqual(42);
  });

  test('should add planetaryAges property containing array of ages in other planetary years to galacticAge object', () => {
    galacticAge.planetaryYears();
    expect(galacticAge.planetaryAges).toEqual([125,48,16,2]);
  });

});