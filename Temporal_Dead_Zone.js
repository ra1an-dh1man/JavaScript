console.log(a); // undefined (var is hoisted and initialized to undefined)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 1;
let b = 2;
const c = 3;

