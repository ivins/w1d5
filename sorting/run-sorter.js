var sorter = require("./index.js");

// console.log(sorter);

var origList = [2, 3, 5, 1, 4, 5, 8];
// console.log(origList);


var sortedList = sorter.sortsListAscending(sorter.storesList(origList));

console.log(sortedList);