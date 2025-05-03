// Dummy Data
const tbody = document.querySelector("tbody");
const nameInput = document.querySelector("#uName");
const passInput = document.querySelector("#uPass");
// innerHTML
const users = [
  { name: "ahmed", password: 123456 },
  { name: "ali", password: 654321 },
  { name: "hosam", password: 579462 },
];

const showUsers = () => {
  tbody.innerHTML = "";
  users.forEach((el, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.password}</td>
        <td><i class="fa-solid fa-trash" onclick="removeUser(${index})"></i></td>
      </tr>
    `;
  });
};

showUsers();

const addNewUser = () => {
  let username = nameInput.value;
  let password = passInput.value;
  let userObj = { name: username, password: password };
  users.push(userObj);
  showUsers();
};

const removeUser = (index) => {
  let isConfirmed = confirm("Are you sure ?");
  if (isConfirmed) {
    users.splice(index, 1);
    showUsers();
  }
};

// Update is missing