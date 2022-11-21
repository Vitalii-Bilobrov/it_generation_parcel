import Notiflix from 'notiflix';
import 'material-icons/iconfont/material-icons.css';
const BASE_URL = 'https://637b70ec10a6f23f7fa8d15c.mockapi.io/';
const refs = {
  list: document.querySelector('.contacts__list'),
};

refs.list.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'A') {
    return;
  }
  const item = e.target.closest('.js-contact-card');
  const id = item.dataset.id;

  if (e.target.nodeName == 'BUTTON') {
    console.log(id);
    deleteContact(id);
    item.remove();
  }
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

getContscts().then(data => {
  const contactItems = data.map(createMarkup).join('');

  refs.list.innerHTML = contactItems;
});

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

// ``;
