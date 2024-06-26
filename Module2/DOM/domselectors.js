
let helloElement = document.getElementById('hello');
console.log(helloElement);
// console.log(helloElement.textContent);

let liElements = document.getElementsByClassName("green");
console.log(liElements);

let items = document.getElementsByTagName("li");
console.log(items);

let item = document.querySelector(".green"); // Only return first item that matches the query
console.log(item);

items = document.querySelectorAll(".green");
console.log(items);