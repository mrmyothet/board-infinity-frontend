const div = document.querySelector('div');
const element1 = document.getElementById('one');
const element2 = document.getElementById('two');

let span1Name = element1.getAttribute('name');
console.log(span1Name);

element1.setAttribute('name', 'changed name');
element1.removeAttribute('name');
element1.id = 'changedId';

element2.classList.add('first-class');
element2.classList.add('second-class');
element2.classList.remove('first-class');

element1.style.color = 'red';
element2.style.backgroundColor = 'green';