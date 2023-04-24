let users;

const detailsModal = document.querySelector('.details-modal');
const detailsModalBackdrop = document.querySelector('.details-modal-backdrop');

async function fetchUsers() {
  try {
    const response = fetch('https://mock-api-onrm.onrender.com/users');
    const users = (await response).json();
    return users;
  } catch (error) {
    return [];
  }
}

async function login(e) {
  e.preventDefault();

  const _username = document.querySelector('#username').value;
  const _password = document.querySelector('#password').value;

  const currentUser = await users.find(
    ({ username, email }) => username === _username && email === _password
  );
  const { name, email, phone, website, username, address } = currentUser;
  const { city, suite, street, zipcode } = address;
  const [firstName] = name.split(' ');

  if (!currentUser) {
    return showAlert({ msg: 'No such user exists' });
  }

  detailsModal.innerHTML = `
  <h1>Hello, ${firstName}</h1>
  <p>Name: ${name}</p>
  <p>Email: <a href='${email}'>${email}</a></p>
  <p>Phone: ${phone}</p>
  <p>Website: <a href='${website}'>${website}</a></p>
  <p>Username: ${username}</p>
  <p>Address: <address>${street}, ${suite}, ${city} ${zipcode}</address></p>`;

  detailsModal.classList.remove('hidden');
  detailsModalBackdrop.classList.remove('hidden');
}

function showAlert({
  msg,
  zIndex = '0',
  duration = 4000,
  textColor = '#fff',
  bgColor = '#181818',
}) {
  const alert = document.querySelector('#alert');
  // show alert only when alert box is initially hidden
  if (alert.style.bottom === '-100px') {
    alert.style.background = bgColor;
    alert.style.color = textColor;
    alert.innerHTML = msg;
    alert.style.bottom = '0px';
    if (zIndex !== '0') alert.style.zIndex = zIndex;
    setTimeout(() => {
      alert.style.bottom = '-100px';
    }, duration);
  }
}

function closeModal() {
  detailsModal.classList.add('hidden');
  detailsModalBackdrop.classList.add('hidden');
}

window.onload = async () => {
  users = await fetchUsers();
  console.log(users);
};

window.closeModal = closeModal;
