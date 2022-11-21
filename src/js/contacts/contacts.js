import Notiflix from 'notiflix';
import 'material-icons/iconfont/material-icons.css';
const BASE_URL = 'https://637b70ec10a6f23f7fa8d15c.mockapi.io/';
const refs = {
  list: document.querySelector('.contacts__list'),
  btnEl: document.querySelector('.btn-all'),
  btnAddContact: document.querySelector('.btn-addContact'),
  backDropEl: document.querySelector('.backdrop'),
  formEl: document.querySelector('.contact-form'),
  btnClose: document.querySelector('.contact-form-close')
};

const onBtnClose = () => {
  refs.backDropEl.classList.toggle('is-closed');
}

refs.btnClose.addEventListener('click', onBtnClose);

// ======================================================

const LOCAL_STORAGE_KEY = 'contact_key';

function initForm() {
  let memory = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      refs.formEl.elements[name].value = value;
    });
  }
}

initForm();

function handleInput(event) {
  let savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};

  savedData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData));
}
function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);

  addContact(userData).then(initPage);

  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

refs.formEl.addEventListener('input', handleInput);
refs.formEl.addEventListener('submit', onSubmitForm);


// ======================================================

const onBtnOpenClick = () => {
  refs.backDropEl.classList.toggle('is-closed');
};

refs.btnAddContact.addEventListener('click', onBtnOpenClick);

refs.btnEl.style.display = 'none';
refs.btnEl.addEventListener('click',initPage);

refs.list.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'A') {
    return;
  }
  const item = e.target.closest('.js-contact-card');
  const id = item.dataset.id;

  if (e.target.nodeName == 'BUTTON') {
    deleteContact(id);
    item.remove();
    return;
  }

  getContactById(id).then(contact => {
    const markUp = createMarkup(contact);
    refs.list.innerHTML = markUp;
    refs.btnEl.style.display = 'block';
  });
}

function getContactById(id) {
    return fetch(`${BASE_URL}contacts/${id}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function getContscts() {
  return fetch(`${BASE_URL}contacts`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function deleteContact(id) {
  return fetch(`${BASE_URL}contacts/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(contact => {
      Notiflix.Notify.info(`${contact.name} was deleted!`);
    });
}

function addContact(data) {
  return fetch(`${BASE_URL}contacts/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
}
initPage();

function initPage() {
  getContscts().then(data => {
  const contactItems = data.map(createMarkup).join('');

    refs.list.innerHTML = contactItems;
    refs.btnEl.style.display = 'none';
});
}

function createMarkup({ id, name, createdAt, avatar, phone, email }) {
  return `<li data-id="${id}" class="col-md-6 js-contact-card">
      <div class="card mb-2 shadow">
        <div class="d-flex justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-row align-items-center gap-1">
            <div class="icon">
               <span class="material-icons-outlined"> contacts </span>
            </div>
            <div class="ms-2 c-details">
              <h2 class="h5 mb-0 fw-bold">${id} - ${name}</h2>
              <span>${createdAt}</span>
            </div>
          </div>
          <img  src="${avatar}" alt="${name}" width="70" height="70"/>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="mt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d">
              <a
                href="tel:+${phone}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2"> phone </span> ${phone}</a
              >
            </li>
            <li class="list-group-item">
              <a
                href="mailto:${email}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2">
                  alternate_email
                </span>
                ${email}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </li>`;
}


