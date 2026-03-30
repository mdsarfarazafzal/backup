const arr = [1, , 3, [4, [5, , 8], 6]];
console.log(arr.flat()); // [ 1, 3, 4, [ 5, <1 empty item>, 8 ], 6 ]
console.log(arr.flat(2)); // [ 1, 3, 4, 5, 8, 6 ]
