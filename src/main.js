import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { GalacticAge } from './../src/super-galactic-age-calculator.js';

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    let galacticAge = new GalacticAge($("input#input").val());
    let planetLabels = ["Mercurial","Venusian","Martian","Jovian"];
    galacticAge.planetaryYears();
    galacticAge.planetaryYearsLeft();
    galacticAge.terrestrialYearsLeft();
    $("ul#output").append("<li>Your age in Terrestrial years is " + galacticAge.terrestrialAge + " years.</li>");
    for (let i = 0; i < 4; i++){
      $("ul#output").append("<li>Your age in " + planetLabels[i] + " years is " + galacticAge.planetaryAges[i] + " years.</li>");
    }
    if (galacticAge.terrestrialAge > 72) {
      $("ul#output").append("<li>You have lived " + galacticAge.terrestrialYearsLeft + " human life expectancy.</li>");
    } else {
      $("ul#output").append("<li>You have " + galacticAge.terrestrialYearsLeft + " Terrestrial years until you reach average human life expectancy.</li>");
    }
    for (let i = 0; i < 4; i++){
      if (galacticAge.terestrialAge > 72) {
        $("ul#output").append("<li>You have lived " + galacticAge.planetaryYearsRemaining[i] + " human life expectancy.</li>");
      } else {
        $("ul#output").append("<li>You have " + galacticAge.planetaryYearsRemaining[i] + " " + planetLabels[i] + " years until you reach average human life expectancy.</li>");
      }
    }
  });
});