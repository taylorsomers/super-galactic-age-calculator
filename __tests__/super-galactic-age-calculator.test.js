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

  test('should convert number of Terrestrial years left until user reaches average human lifespan into Mercurial years', () => {
    galacticAge.planetaryYears();
    galacticAge.planetaryYearsLeft();
    let mercurialYearsLeft = galacticAge.planetaryYearsRemaining[0];
    expect(mercurialYearsLeft).toEqual(175);
  });

  test('should convert number of Terrestrial years left until user reaches average human lifespan into Venusian years', () => {
    galacticAge.planetaryYears();
    galacticAge.planetaryYearsLeft();
    let venusianYearsLeft = galacticAge.planetaryYearsRemaining[1];
    expect(venusianYearsLeft).toEqual(68);
  });

  test('should convert number of Terrestrial years left until user reaches average human lifespan into Martian years', () => {
    galacticAge.planetaryYears();
    galacticAge.planetaryYearsLeft();
    let martianYearsLeft = galacticAge.planetaryYearsRemaining[2];
    expect(martianYearsLeft).toEqual(22);
  });

  test('should convert number of Terrestrial years left until user reaches average human lifespan into Jovian years', () => {
    galacticAge.planetaryYears();
    galacticAge.planetaryYearsLeft();
    let jovianYearsLeft = galacticAge.planetaryYearsRemaining[3];
    expect(jovianYearsLeft).toEqual(4);
  });

  test('should calculate number of Terrestrial years over average life expectancy a user-inputted age is, if it is over average life expectancy', () => {
    let galacticSeniorAge = new GalacticAge(80);
    galacticSeniorAge.terrestrialYearsLeft();
    expect(galacticSeniorAge.terrestrialYearsLeft).toEqual("8 over");
  });

});