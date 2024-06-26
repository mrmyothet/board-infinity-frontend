
console.log(document);

console.dir(document);

console.log(document.domain);
console.log(document.URL);

document.title = 'changed title';

const body = document.body;
body.append("Hello");

const div = document.createElement('div');
// console.log(div);
div.innerText = 'div created by javascript';
body.appendChild(div);
// body.removeChild(div);

// body.remove();