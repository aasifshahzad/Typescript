//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const myArray = [1, 2, 3, 4, 5];

console.log(myArray[2]); // output: 3
console.log(myArray[4]); // output: Index error: Index out of range
console.log(myArray.indexOf(10)); // returns -1 if item not present in an array and index number if item is present.