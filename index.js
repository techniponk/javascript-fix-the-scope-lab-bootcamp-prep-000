var animal = 'dog'

function myAnimal(animal) {
  animal = 'dog'
  return animal
}

function yourAnimal(animal) {
 animal = 'cat'
  return animal
}

function add2(n) {
    const two = 2
  return n + two
  // Feel free to move things around!
}

var funkyFunction = function(theFunk) {
  return function(theFunk) {
    return "FUNKY!"
  }
     //var theFunk = funkyFunction(theFunk)

}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction ()
