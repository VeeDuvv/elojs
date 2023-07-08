// this file is for testing and debugging purposes only
// it contains sample code that is not part of the main application / exercises


/*
// Page 85 // 
*/

// function sum(range) {
//     let total = 0;
//     for (let value of range) {
//         total += value;
//     }
//     return total;
// }

// function range(start, end, step = 1) {
//     let range = [];
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             range.push(i);
//         }
//     } else {
//         for (let i = start; i >= end; i += step) {
//             range.push(i);
//         }
//     }
//     return range;
// }

// console.log("sum of numbers 1-10 is: "+sum(range(1, 10)));

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
// }

// repeatLog(3);

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action("repeat(n) "+i);
//     }
// }
// repeat(5, console.log);

// let labels = [];
// repeat(5, i => {labels.push(`Unit ${i + 1}`)});
// console.log(labels);

/*
// Page 86 // 
*/

// // the function below is a pure function.
// function greaterThan(n) {
//     return m => m > n;
// }

// // the following line is a function expression. It is a function that is assigned to a variable.
// let greaterThan10 = greaterThan(10);

// // the following line is a function call. It calls the function assigned to the variable greaterThan10.
// // the function call passes the argument 11 to the function.
// // the function call returns true.
// console.log(greaterThan10(11));

