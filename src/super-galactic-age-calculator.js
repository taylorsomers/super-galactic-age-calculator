export class GalacticAge {
  constructor(terrestrialAge) {
    this.terrestrialAge = terrestrialAge;
  }

  mercurialAge() {
    let mercurialAge = parseInt((this.terrestrialAge*4.17).toFixed(0));
    return mercurialAge;
  }

  venusianAge() {
    let venusianAge = parseInt((this.terrestrialAge*1.61).toFixed(0));
    return venusianAge;
  }

  martianAge() {
    let martianAge = parseInt((this.terrestrialAge*0.53).toFixed(0));
    return martianAge;
  }

  jovianAge() {
    let jovianAge = parseInt((this.terrestrialAge*0.08).toFixed(0));
    return jovianAge;
  }

  terrestrialYearsLeft() {
    let terrestrialYearsLeft = 72-this.terrestrialAge;
    return terrestrialYearsLeft;
  }

}