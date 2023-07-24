async function* fetchUserDataGenerator() {
    let page = 1;
    // const pageSize = 3; // Number of users to fetch per page

    while (true) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=1`);
        const userData = await response.json();
        if (userData.length === 0) {
            break;
        }
        for (const user of userData) {
            yield user;
        }
        page++
    }
}

function displayUserData(userData) {
    const userListDiv = document.getElementById('userList');
    const userCard = document.createElement('div');
    userCard.innerHTML = `<h3>${userData.name}</h3><p>Email: ${userData.email}</p>`;
    userListDiv.appendChild(userCard);
}

async function generateUsers() {
    const userDataGenerator = fetchUserDataGenerator();
    showUser(userDataGenerator)
    const showMoreBtn = document.getElementById('showMoreBtn');
    showMoreBtn.addEventListener('click', ()=> showUser(userDataGenerator))
}

generateUsers();


async function showUser (userDataGenerator){
    const { value, done } = await userDataGenerator.next();
    if (done) {
        showMoreBtn.disabled = true
        return
    }
    displayUserData(value);
}