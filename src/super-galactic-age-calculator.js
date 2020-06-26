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
    let planetLifespan = [300,116,38,6];
    this.planetaryYearsRemaining = [];
    for (let i = 0; i < 4; i++){
      if (this.planetaryAges[i] > planetLifespan[i]) {
        this.planetaryYearsRemaining.push(((this.planetaryAges[i]-planetLifespan[i]).toFixed(0)) + " over");
      } else {
        this.planetaryYearsRemaining.push(parseInt((planetLifespan[i]-this.planetaryAges[i]).toFixed(0)));
      }
    }
  }
  terrestrialYearsLeft() {
    if (this.terrestrialAge > 72) {
      this.terrestrialYearsLeft = (this.terrestrialAge-72).toString() + " over";
    } else {
      this.terrestrialYearsLeft = 72-this.terrestrialAge;
    }
  }
}