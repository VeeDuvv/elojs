
// this function uses recursion to flatten an array of arrays
// it starts with an empty array and adds each element of the array to it
// it takes each element and checks if it is an array
// it returns the accumulator array
// the reduce method takes a callback function and an initial value
// the callback function takes an accumulator and a value
// the initial value is an empty array
// the callback function checks if the value is an array
// if it is an array, it calls itself on that array
// if it is not an array, it adds it to the accumulator array
// the reduce method returns the accumulator array

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
