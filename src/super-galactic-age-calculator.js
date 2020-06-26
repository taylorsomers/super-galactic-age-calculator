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

}