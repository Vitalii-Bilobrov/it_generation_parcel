import Notiflix from 'notiflix';
import 'material-icons/iconfont/material-icons.css';
import { refs } from './refs';
import {
  getContactById,
  getContscts,
  deleteContact,
} from './service/contacts_API';
import { createMarkup } from './createMarkUp';
import { spinnerPlay, spinnerStop } from './spinner.js';

refs.btnAllContacts.style.display = 'none';
refs.btnAllContacts.addEventListener('click', initPage);

refs.list.addEventListener('click', handleClick);

async function handleClick(e) {
  if (e.target.nodeName === 'UL' || e.target.nodeName === 'A') {
    return;
  }
  const item = e.target.closest('.js-contact-card');
  const id = item.dataset.id;

  if (e.target.nodeName == 'BUTTON') {
    try {
      spinnerPlay();
      const data = await deleteContact(id);
      item.remove();
      Notiflix.Notify.info(`${data.name} was deleted!`);
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    } finally {
      spinnerStop();
    }
    return;
  }

  try {
    spinnerPlay();
    const data = await getContactById(id);
    const markUp = createMarkup(data);
    refs.list.innerHTML = markUp;
    refs.btnAllContacts.style.display = 'block';
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  } finally {
    spinnerStop();
  }
}

initPage();

async function initPage() {
  try {
    spinnerPlay();
    const data = await getContscts();
    const contactItems = [...data]
      .sort((a, b) => b.id - a.id)
      .map(createMarkup)
      .join('');

    refs.list.innerHTML = contactItems;
    refs.btnAllContacts.style.display = 'none';
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  } finally {
    spinnerStop();
  }
}
