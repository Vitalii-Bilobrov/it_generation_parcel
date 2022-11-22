import { refs } from './refs';
import { addContact } from './service/contacts_API';
import { createMarkup } from './createMarkUp';
const LOCAL_STORAGE_KEY = 'contact_key';

refs.btnClose.addEventListener('click', onBtnClose);
refs.formEl.addEventListener('input', handleInput);
refs.formEl.addEventListener('submit', onSubmitForm);
refs.btnAddContact.addEventListener('click', onBtnOpenClick);

function onBtnClose() {
  refs.backDropEl.classList.toggle('is-closed');
}
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

  addContact(userData)
    .then(data => {
      const markUp = createMarkup(data);
      refs.list.insertAdjacentHTML('afterbegin', markUp);
    })
    .catch(error => console.log(error))
    .finally(onBtnClose);

  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
function onBtnOpenClick() {
  refs.backDropEl.classList.toggle('is-closed');
}
