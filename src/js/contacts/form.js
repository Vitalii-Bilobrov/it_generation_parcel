import { refs } from './refs';
import { addContact } from './service/contacts_API';
import { createMarkup } from './createMarkUp';
import { Notify } from 'notiflix';
import { spinnerPlay, spinnerStop } from './spinner';
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
async function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });

  try {
    spinnerPlay();
    const data = await addContact(userData);
    const markUp = createMarkup(data);
    refs.list.insertAdjacentHTML('afterbegin', markUp);
    Notify.success(`Add ${data.name} successfully`);
  } catch (error) {
    Notify.failure(error.message);
  } finally {
    onBtnClose();
    spinnerStop();
  }

  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
function onBtnOpenClick() {
  refs.backDropEl.classList.toggle('is-closed');
}
