let x = 5;//number
console.log(typeof x);

let y = 12345678912345678901234567890123456789012234567890;
console.log(typeof y);// number

let z = 12345678912345678901234567890123456789012234567890n;
console.log(typeof z);// bigInt

let name = 'John';
console.log(typeof name);// string 

let isTrue = true;
console.log(typeof isTrue); // boolean

let _null = null;
console.log(typeof _null); // object

let _undefined = undefined;
console.log(typeof _undefined); // undefined

let age;
console.log(age); // undefined

let person = {
    name: 'John', 
    age: 30
}
console.log(person);

let id = Symbol('id');
console.log(id);
console.log(typeof id);