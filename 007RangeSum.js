function rangeSum(arr, start, end) {
  if (start === end) {
    return arr[start];
  }
  return arr[start] + rangeSum(arr, start + 1, end);
}

function rangeSum(start, end) {
    if (start === end) {
        return start;
    }
    return start + rangeSum(start + 1, end);
}

console.log(rangeSum(0, 3));