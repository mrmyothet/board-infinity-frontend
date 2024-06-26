const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    alert('Hello World');
});

const searchBox = document.querySelector('#searchBox');

searchBox.addEventListener('keyup', () => {
    console.log('KeyUp event triggered.');
});