// this file is for testing and debugging purposes only
// it contains sample code that is not part of the main application / exercises

function sum(range) {
    let total = 0;
    for (let value of range) {
        total += value;
    }
    return total;
}

function range(start, end, step = 1) {
    let range = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            range.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            range.push(i);
        }
    }
    return range;
}

console.log(sum(range(1, 10)));