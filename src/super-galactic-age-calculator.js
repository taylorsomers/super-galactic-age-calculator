export class GalacticAge {
  constructor(terrestrialAge) {
    this.terrestrialAge = terrestrialAge;
  }

  mercurialAge() {
    let mercurialAge = this.terrestrialAge*4.17
    return mercurialAge;
  }

}