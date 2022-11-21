import Notiflix from 'notiflix';
import { UnsplashApi } from './UnsplashApi';
import { createMarkup } from './createMarkup';
import { refs } from './refs';
import { Spinner } from 'spin.js';

var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#84bfdc', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts);

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
      spinner.spin(target);
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
      }).catch(() => {

  }).finally(() => {
    spinner.stop();
  })
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
  spinner.spin(target);
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
  }).catch(() => {

  }).finally(() => {
    spinner.stop();
  })
  event.target.reset();
}

refs.formEl.addEventListener('submit', onInputSubmit);



