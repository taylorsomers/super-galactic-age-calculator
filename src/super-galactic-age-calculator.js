export class GalacticAge {
  constructor(terrestrialAge) {
    this.terrestrialAge = terrestrialAge;
  }

  planetaryYears() {
    let planetRates = [4.17,1.61,0.53,0.08];
    this.planetaryAges = planetRates.map((element) => {
      return parseInt((element * this.terrestrialAge).toFixed(0));
    });
  }

  planetaryYearsLeft() {
    let planetLifespan = [300,116];
    this.planetaryYearsRemaining = [];
    for (let i = 0; i < 2; i++){
      this.planetaryYearsRemaining.push(parseInt((planetLifespan[i]-this.planetaryAges[i]).toFixed(0)));
    }
  }

  terrestrialYearsLeft() {
    this.terrestrialYearsLeft = 72-this.terrestrialAge;
  }

}