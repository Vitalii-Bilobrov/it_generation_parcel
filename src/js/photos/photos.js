import Notiflix from 'notiflix';
import { UnsplashApi } from './UnsplashApi';
import { createMarkup } from './createMarkup';
import { refs } from './refs';

const unsplashApi = new UnsplashApi();

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
const loadMorePhotos = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      unsplashApi.incrementPage();
      unsplashApi.getPhotos().then(data => {
        if (data.results.length === 0) {
          Notiflix.Notify.failure('Nothing found');
          return;
        }

        refs.galleryEL.insertAdjacentHTML(
          'beforeend',
          createMarkup(data.results)
        );
        const haveMorePhotos = unsplashApi.morePagesExists();
        if (haveMorePhotos) {
          const item = document.querySelector('.gallery__item:last-child');
          observer.observe(item);
        }
      });
    }
  });
};

const io = new IntersectionObserver(loadMorePhotos, options);

function onInputSubmit(event) {
  event.preventDefault();
  const {
    elements: { query },
  } = event.target;
  const searchValue = query.value.toLowerCase().trim();
  if (!searchValue) {
    return Notiflix.Notify.failure('Input word');
  }
  unsplashApi.resetPage();
  refs.galleryEL.innerHTML = '';

  unsplashApi.query = searchValue;
  unsplashApi.getPhotos().then(data => {
    if (data.results.length === 0) {
      Notiflix.Notify.failure('Nothing found');
      return;
    }
    unsplashApi.setTotal(data.total);

    refs.galleryEL.innerHTML = createMarkup(data.results);
    const haveMorePhotos = unsplashApi.morePagesExists();
    if (haveMorePhotos) {
      const item = document.querySelector('.gallery__item:last-child');
      io.observe(item);
    }
  });
  event.target.reset();
}

refs.formEl.addEventListener('submit', onInputSubmit);
