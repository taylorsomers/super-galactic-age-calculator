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

  test('should convert user-inputted age in Terrestrial years to Mercurial years', () => {
    galacticAge.planetaryYears();
    let mercurialAge = galacticAge.planetaryAges[0];
    expect(mercurialAge).toEqual(125);
  });

  test('should convert user-inputted age in Terrestrial years to Venusian years', () => {
    galacticAge.planetaryYears();
    let venusianAge = galacticAge.planetaryAges[1];
    expect(venusianAge).toEqual(48);
  });

  test('should convert user-inputted age in Terrestrial years to Martian years', () => {
    galacticAge.planetaryYears();
    let martianAge = galacticAge.planetaryAges[2];
    expect(martianAge).toEqual(16);
  });

  test('should convert user-inputted age in Terrestrial years to Jovian years', () => {
    galacticAge.planetaryYears();
    let jovianAge = galacticAge.planetaryAges[3];
    expect(jovianAge).toEqual(2);
  });

});