function deepCompare (obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false
    }
    if (!deepCompare(obj1[key], obj2[key])) {
      return false
    }
  }
  return true
}

console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // false