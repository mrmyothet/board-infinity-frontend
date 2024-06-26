
const addButton = document.querySelector('#addButton');
const removebutton = document.querySelector('#removeButton');
const foodList = document.querySelector('#foodList');

addButton.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    const newListItemText = document.createTextNode('Tacos');
    newListItem.append(newListItemText);
    foodList.appendChild(newListItem);

});

removebutton.addEventListener('click', () => {
    const sushi = document.querySelector('li:nth-child(2)');
    foodList.removeChild(sushi);
});