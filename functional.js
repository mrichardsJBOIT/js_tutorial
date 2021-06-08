let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Kansas -> Kansas
//North Dakota -> north-Dakota

function urlIfy(string){
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
//MAP
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element){
    urls.push(urlIfy(element));
  });
  return urls;
}

console.log(imperativeUrls(states));
console.log("--------");
function functionalUrls(elements) {
  return elements.map(element => urlIfy(element));
}
console.log(functionalUrls(states));

// REDUCE

//singles
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if ( element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1 );
}

console.log(imperativeSingles(states));

console.log(functionalSingles(states));
