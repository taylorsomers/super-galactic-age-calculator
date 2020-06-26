export class GalacticAge {
  constructor(terrestrialAge) {
    this.terrestrialAge = terrestrialAge;
  }

  // planetaryYears() {
  //   let planetRates = [4.17,1.61,0.53,0.08];
  //   this.planetaryAges = planetRates.map((element) => {
  //     return parseInt(element * this.terrestrialAge).toFixed(0);
  //   });
  // }
  
  mercurialYears() {
    let mercurialAge = parseInt((this.terrestrialAge*4.17).toFixed(0));
    return mercurialAge;
  }

  venusianYears() {
    let venusianAge = parseInt((this.terrestrialAge*1.61).toFixed(0));
    return venusianAge;
  }

  martianYears() {
    let martianAge = parseInt((this.terrestrialAge*0.53).toFixed(0));
    return martianAge;
  }

  jovianYears() {
    let jovianAge = parseInt((this.terrestrialAge*0.08).toFixed(0));
    return jovianAge;
  }

  terrestrialYearsLeft() {
    this.terrestrialYearsLeft = 72-this.terrestrialAge;
  }

}