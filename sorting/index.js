//Create a module that exports a function that takes a number
// as a parameter and stores it in a list.

var storesList = function(addToList){
  var listOfNumbers = [];
  for (var i = 0; i < addToList.length; i++) {
    listOfNumbers.push(addToList[i]);
  }
  return listOfNumbers;
};
// console.log(storesList([3,2,1])); //for testing


var sortsListAscending = function(arr) {
  var sortedList;
  arr.sort(function(a, b) {
    return a - b ;
  });
  sortedList = arr;
  return sortedList;
};
// console.log(sortsListAscending([2, 1, 3])); //for testing

// console.log(sortsListAscending(storesList(2,1,3)));


module.exports.storesList = storesList;
module.exports.sortsListAscending = sortsListAscending;

// console.log(module.exports);