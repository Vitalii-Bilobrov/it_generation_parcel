const formEl = document.querySelector('.js-form');
const userData = {};
const LOCAL_STORAGE_KEY = 'Hello, User';
console.log(formEl.elements);
function initPage() {
  let memory = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      console.log(name);
      console.log(value);

      formEl.elements[name].value = value;
    });
  }
}

initPage();

function handleInput(event) {
  userData[event.target.name] = event.target.value;
  console.log(userData);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));

  console.log(localStorage);
}

formEl.addEventListener('input', handleInput);
