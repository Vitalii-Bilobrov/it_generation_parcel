import Notiflix from 'notiflix';
import 'material-icons/iconfont/material-icons.css';
import { refs } from './refs';
import {
  getContactById,
  getContscts,
  deleteContact,
} from './service/contacts_API';
import { createMarkup } from './createMarkUp';

refs.btnAllContacts.style.display = 'none';
refs.btnAllContacts.addEventListener('click', initPage);

refs.list.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'A') {
    return;
  }
  const item = e.target.closest('.js-contact-card');
  const id = item.dataset.id;

  if (e.target.nodeName == 'BUTTON') {
    deleteContact(id)
      .then(contact => {
        item.remove();
        Notiflix.Notify.info(`${contact.name} was deleted!`);
      })
      .catch(error => Notiflix.Notify.failure(error.message));

    return;
  }

  getContactById(id).then(contact => {
    const markUp = createMarkup(contact);
    refs.list.innerHTML = markUp;
    refs.btnAllContacts.style.display = 'block';
  });
}

initPage();

function initPage() {
  getContscts()
    .then(data => {
      const contactItems = [...data]
        .sort((a, b) => b.id - a.id)
        .map(createMarkup)
        .join('');

      refs.list.innerHTML = contactItems;
      refs.btnAllContacts.style.display = 'none';
    })
    .catch(error => console.log(error));
}
