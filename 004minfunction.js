function returnMin(a, b) {
    console.log("a = " + a + " b = " + b);
    if (a < b) return a;
    else return b;
}
console.log(newFunction());
console.log(returnMin(2, 5));
console.log(returnMin(2, -5));
function newFunction() {
    return "returnMin(2, 5)";
}

