function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

// write a function that reverses an array in place. i.e. it does not use a new array to return the result.

// The JavaScript function reverseArrayInPlace is used to reverse the elements of an array in place, meaning it modifies the original array without creating a new one. Here's how it works:
// The function takes an array as a parameter.
// It initializes a variable temp which will be used to temporarily store array elements during the swapping process.
// The for loop iterates over the array from the beginning to the middle element. Since the goal is to reverse the array, it is sufficient to only iterate until the middle element. If we iterate beyond the middle, the swapping process would undo the reversal.
// Inside the loop, the function performs the following steps:
// Assigns the value of array[i] to temp. This stores the current element in the variable temp.
// Sets array[i] to the value of array[array.length - (i + 1)]. This assigns the value of the element symmetrically opposite to the current element to the current position. For example, when i is 0, it swaps the first and last elements; when i is 1, it swaps the second and second-to-last elements, and so on.
// Assigns the value of temp (the original array[i]) to array[array.length - (i + 1)]. This completes the swapping process, as the original value of array[i] is now stored in the position of the symmetrically opposite element.
// The loop continues until it reaches the middle of the array, effectively swapping all the elements necessary for the reversal.
// Finally, the function returns the modified array.
// For example, if you call reverseArrayInPlace([1, 2, 3, 4, 5]), the function will swap the elements in the array as follows:
// Iteration 1: [5, 2, 3, 4, 1]
// Iteration 2: [5, 4, 3, 2, 1]
// The final reversed array [5, 4, 3, 2, 1] is then returned.

function reverseArrayInPlace(array) {
    let temp;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - (i + 1)];
        console.log("i: "+i+", array[i]: "+array[i]);
        array[array.length - (i + 1)] = temp;
    }
    
    return array;
}

// console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace([1,2,3,4,5,6]));
