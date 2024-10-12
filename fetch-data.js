async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        dataContainer.appendChild(userList);
        users.forEach(user => {
            let element = document.createElement('li');
            element.textContent = user.name;
            userList.appendChild(element);
        });
        dataContainer.innerHTML += dataContainer;

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);