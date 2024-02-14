let string = "";
//    ^?
const int = 1;
//    ^?
const boolean = true;
//    ^?
const object = {};
//    ^?
const array = [];
//    ^?
const nell = null;
//    ^?
const undefinned = undefined;
//    ^?
const symbol = Symbol();
//     ^?

const isTruthy = (x) => !!x; // --- !!x is a shorthand for Boolean(x)

console.log("Empty string", isTruthy(string)); //false
//However,
string = " ";
console.log("String with space", isTruthy(string)); //true

console.log("Int", isTruthy(int)); // true
console.log("Boolean", isTruthy(boolean)); // true
console.log("Object", isTruthy(object)); // true
console.log("Array", isTruthy(array)); // true
console.log("Null", isTruthy(nell)); // false
console.log("Undefinned", isTruthy(undefinned)); // false
console.log("Symbol", isTruthy(symbol)); // true
