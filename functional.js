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

let numbers = [1,2,3,4,5,6,7,8,9,10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}

console.log(functionalSum(numbers));

//lengths imperative solution

function imperativeLength(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  })
  return lengths;
}

console.log(imperativeLength(states));

//lengths functional solution

function functionalLength(elements) {
  return elements.reduce((lengths, element) => {
                            lengths[element] = element.length;
                            return lengths;
                            },
                            {}
                          );
}

console.log(functionalLength(states));

// execrise reduce 6.3.4.1 product

let items = [2,2,4];
function imperativeProduct(elements) {
  let product = 1;
  elements.forEach(function(element) {
    product *= element;
  });
  return product;
}

console.log(imperativeProduct(items));

function functionalProduct(elements) {
  return items.reduce((product, element) => { return product *= element},1);
}

console.log(functionalProduct(items));
