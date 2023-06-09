(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // "Mercury|Venus|Earth|Mars|Jupiter|Sat urn|Uranus|Neptune"

        // TODO # 1
    // console.log(planetsArray.join('<br>'));
    const planetBreak = planetsArray.join("<br/>");
    console.log(planetBreak);


    // TODO # 2
    const unorderedPlanetList = (arr) => {
        let planetsStringB= planetsArray.join(`</li><li>`);
        return `<ul><li>${planetsStringB}</li></ul>`
    }
    console.log(unorderedPlanetList(planetsArray));




})();