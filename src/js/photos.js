import Notiflix from 'notiflix';
const galleryEL = document.querySelector('.gallery');
const formEl = document.querySelector('.js-search-form');
class UnsplashApi {
  #API_KEY = 'gEopSExvxGRBacvbCX5khX4G6aHTWmEvx0oJJ4DvPUk';
  #page = 1;
  #per_page = 25;
  #query = '';

  getPhotos() {
    return fetch(
      `https://api.unsplash.com/search/photos?client_id=${this.#API_KEY}&page=${
        this.#page
      }&query=${this.#query}&per_page=${this.#per_page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}

const unsplashApi = new UnsplashApi();

function createMarkup(photos) {
  return photos
    .map(
      ({ urls, alt_description }) => /*html*/ `<li class="gallery__item">
    <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`
    )
    .join('');
}
function onInputSubmit(event) {
  event.preventDefault();
  const {
    elements: { query },
  } = event.target;
  const searchValue = query.value.toLowerCase().trim();
  if (!searchValue) {
    return Notiflix.Notify.failure('Input word');
  }
  unsplashApi.query = searchValue;
  unsplashApi.getPhotos().then(data => {
    galleryEL.innerHTML = createMarkup(data.results);
    console.log(data);
  });
}

formEl.addEventListener('submit', onInputSubmit);
