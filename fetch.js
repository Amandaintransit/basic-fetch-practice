const allUsers = document.getElementById('GetAllUsers')
allUsers.addEventListener('click', createCards)
 

const UserUrl = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";
function createCards() {
fetch(UserUrl)
    .then(response => response.json())

    .then (value => {
        const cardContainer = document.getElementById("card-container");
        value.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            <p>${user.firstName} ${user.lastName}</p>
            <p>${user.email}</p>
            <p>${user.companyName}</p>
            <p>${user.yearsEmployed}</p>
            `;

            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error', error));

}
