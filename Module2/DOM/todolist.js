const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('completed');
    })
});