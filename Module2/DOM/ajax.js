
const userList = document.querySelector('#userList');
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);

            userData.forEach((user) => {
                const newUser = document.createElement('li');
                const newUserText = document.createTextNode(user.name);
                newUser.appendChild(newUserText);

                userList.appendChild(newUser);
            });
        }
        else {
            console.log('There was a problem with the request!');
        }
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();