const formEl = document.querySelector('.js-form');

const LOCAL_STORAGE_KEY = 'Hello, User';

function initPage() {
  let memory = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

initPage();

function handleInput(event) {
  let savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};

  savedData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData));
}
function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);

  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', onSubmitForm);
