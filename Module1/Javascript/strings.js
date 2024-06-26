let str1 = "Hello, World";
let str2 = 'This is a string';

let str3 = `123 string`;
console.log(`1 + 2 = ${1 + 2}`);

console.log(typeof str1, typeof str2, typeof str3);
console.log(str2.length);
console.log(str2[0]);

str2[0] = 'H';
console.log(str2); // string are immutable - cannot change characters