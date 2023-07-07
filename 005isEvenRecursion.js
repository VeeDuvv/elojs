function isEvenRecursion(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  if (num < 0) {
        return isEvenRecursion(num + 2);
    }
    else return isEvenRecursion(num - 2);
}

console.log(isEvenRecursion(0));
console.log(isEvenRecursion(5));
console.log(isEvenRecursion(50));
console.log(isEvenRecursion(-1));
