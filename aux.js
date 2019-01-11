var orig = 10;
 function addTwo(x) {
    let ret = orig + x;
    return ret;
  }
  let b = addTwo(2);
  // let c = addThree(3);
  console.log(b);

module.exports.calc = b;
module.exports.addTwo = addTwo;

console.log(module.exports);