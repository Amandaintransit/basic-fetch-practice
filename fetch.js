const allUsersBtn = document.getElementById('GetAllUsers-btn');
const experiencedUsersBtn = document.getElementById('ExperiencedUsers-btn');
const resetBtn = document.getElementById('Reset-btn');
const cardContainer = document.getElementById('card-container');

const UserUrl = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";

let usersData = [];

function getAllUsers() {
  fetch(UserUrl)
    .then(response => response.json())
    .then(data => {
      usersData = data;
      createCards(usersData);
    })
    .catch(error => console.error("Error:", error));
}

function createCards(users) {
  cardContainer.innerHTML = "";
  users.forEach(user => {
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
}

function filterTenPlus() {
  const filtered = usersData.filter(user => user.yearsEmployed >= 10);
  createCards(filtered);
}

function resetCards() {
  cardContainer.innerHTML = "";
}

allUsersBtn.addEventListener('click', getAllUsers);
experiencedUsersBtn.addEventListener('click', filterTenPlus);
resetBtn.addEventListener('click', resetCards);
